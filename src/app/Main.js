import  React from 'react'
import {BrowserRouter as Router, Route, Link, NavLink, Redirect} from 'react-router-dom'
import { Input, Menu, Dropdown, Sidebar, Button, Divider, Header, Label, Icon, Image } from 'semantic-ui-react'
import {observer} from 'mobx-react'
import Search from './Search.js'
import About from './About.js'
import Trending from './Trending.js'
import {KC} from './KC.js'
import {iSearch, iTwit, iGit} from './Icons.js'
import {giphy_search, giphy_random} from './GiphyAPI.js'

@observer
export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 'Search',
      results: [],
      route: '/',
      code: []
    }
  }
  componentWillMount(){
    //Before component loads I set which react route component I want loaded
    // Since React router is handling strict routing I only need to use the '.includes' method
    if (window.location.href.includes('about')){
      this.setState({route: 'About', active: 'About'})
    }
    else if (window.location.href.includes('trending')){
      this.setState({route: 'Trending', active: 'Trending'})
    }
    else{
      this.setState({route: '/', active: 'Search'})
    }
  }

  componentDidMount(){
    $(() => {
      $('#container').focus();
    });
  }
  checkKeys = (e) =>{
    let state = KC(e.key, this.state.code)
    this.setState({code: state.code})
  }
  render() {
    //RUU is a mutable variable that handles my component Routes
    //When I want to swap routes without reloading the page I copy an instance of RUU and render it
    var RUU
    if (this.state.route === 'About'){
      RUU = About
    }
    else if (this.state.route === 'Trending'){
      RUU = Trending
    }
    else if (this.state.route === '/'){
      RUU = Search
    }
    return (
      <div id='container' tabIndex="1"
        onKeyDown={this.checkKeys}
        >
        <div className='menu-bar'>
          <Menu style={{backgroundColor: 'gray'}} pointing secondary>
            <Menu.Item name='Search' active={this.state.active === 'Search'} onClick={() => {this.setState({active: 'Search', route: '/'}); window.history.pushState({}, null, '/')}} />
            <Menu.Item name='Trending' active={this.state.active === 'Trending'} onClick={() => {this.setState({active: 'Trending', route: 'Trending'}); window.history.pushState({}, null, '/trending')}} />
            <Menu.Item name='About' active={this.state.active === 'About'} onClick={() => {this.setState({active: 'About', route: 'About'}); window.history.pushState({}, null, '/about')}} />
            <Menu.Menu position='right'>
              <Menu.Item>
                <a href='https://twitter.com/yamoshotto'><img src={iTwit}/></a>
              </Menu.Item>
              <Menu.Item>
                <a href='https://github.com/asantebuil'><img src={iGit}/></a>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </div>
          <Sidebar.Pushable>
            <Sidebar
              as={Menu}
              animation='scale down'
              width='very wide'
              direction='right'
              visible={this.props.store.info_visibility}
              icon='labeled'
              vertical
              inverted
            >
            <Menu.Item>
              <Icon
                name='x'
                link
                onClick={()=>{this.props.store.info_visibility = false}}/>
            </Menu.Item>
            <Menu.Item>
              <Image src={this.props.store.image_info.image}/>
            </Menu.Item>
            <Menu.Item>
              <h4>Source:</h4>
              <a href={this.props.store.image_info.source}>{this.props.store.image_info.source}</a>
            </Menu.Item>
            <Menu.Item>
              <h4>Slug:</h4>
              {this.props.store.image_info.slug}
            </Menu.Item>
            <Menu.Item>
              <h4>Rating:</h4>
              {this.props.store.image_info.rating.toUpperCase()}
            </Menu.Item>
            <Menu.Item>
              <h4>Import Date:</h4>
              {this.props.store.image_info.date}
            </Menu.Item>
            <Menu.Item>
              <h4>Bitly:</h4>
              <a href={this.props.store.image_info.bitly_url}>{this.props.store.image_info.bitly_url}</a>
            </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
            <RUU store={this.props.store}/>
          </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
    )
  }
}
