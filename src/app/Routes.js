import React from 'react'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import {observer} from 'mobx-react'
import Main from './Main.js'

@observer
export default class Routes extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={() => (<Main store={this.props.store}/>)} />
            <Route exact path="/trending" component={() => (<Main store={this.props.store}/>)} />
            <Route exact path="/about" component={() => (<Main store={this.props.store}/>)} />
          </div>
        </Router>
      </div>
    )
  }
}
