import React from 'react'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'

import {observer} from 'mobx-react'

// import Cookies from 'universal-cookie';
// const cookie = new Cookies()
// import jwt from 'jwt-simple'
// import JWT from 'jwt-decode'

// import { Input, Menu, Comment, Dimmer, Loader, Button, Grid, Divider, Header, Icon, Image, Label } from 'semantic-ui-react'

/////Component Routes/////

import Home from './Home.js'
// import Room from './Room.js'
// import Login from './Login.js'
// import Whitelist from './Whitelist.js'
//import Reciever from './messageReciever.js'
//import ActiveChats from './activeChats.js'

@observer
export default class Main extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
     
    }
  }

  componentDidMount(){

  }


  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={() => (<Home store={this.props.store}/>)} />
          </div>
        </Router>
      </div>
    )
  }
}

// <Route path="/room/:id" component={() => (<Room store={this.props.store}/>)}/>
// <Route path="/login" component={Login}/>
// <Route path="/whitelist" component={Whitelist}/>