import  React from 'react'

import {BrowserRouter as Router, Route, Link, NavLink, Redirect} from 'react-router-dom'

import { Input, Menu, Comment, Dimmer, Loader, Button, Grid, Divider, Header, Label, Icon, Image, Popup, Card, Statistic, Modal, Form, Message } from 'semantic-ui-react'
import {observer} from 'mobx-react'
//import isURI from 'validate.io-uri'
// import axios from 'axios'
// import EmojiPicker from 'emojione-picker'
// import emojis from 'emojis-list'
// import emojiKey from 'emojis-keywords'
// import isEmoji from 'is-standard-emoji'
import { Scrollbars } from 'react-custom-scrollbars'
import Particles from 'react-particles-js'
import particleConfig from './particles.json'
import {iSearch, iTwit, iGit} from './icons.js'

var dev_mode = false
var DOMAIN_URL = 'https://yamochat.im'
if(dev_mode){
  DOMAIN_URL = 'http://127.0.0.1:9001'
}



@observer
export default class Home extends React.Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount(){

  }

  componentWillUnMount(){
  }

  randT = () =>{
    let index = this.state.index
    if (index == values.length-1){
      index = 0
    }
    this.setState({rollingText: values[index], index: index+1})
  }

  render() {
    return (
      <div className='container'>
        <div className="toolbar">
          <ul className='ToolBarElms'>
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#trending">Popular</a></li>
            <li><a href="#about">About</a></li>
            <li style={{float: 'right'}}><a href='#'><img src={iTwit}/></a></li>
            <li style={{float: 'right'}} ><a href='#'><img src={iGit} /></a></li>
            <li style={{float: 'right', padding: '12px'}}> <img src={iSearch} style={{paddingRight: '10px'}}/> <input type='text'></input></li>
          </ul>
        </div>
        <div className="main">
        </div>
      </div>
    )
  }
}
