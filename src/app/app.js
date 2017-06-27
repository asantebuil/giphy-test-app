import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import store from './mobx/store.js'
import Routes from './Routes.js'

injectTapEventPlugin() // Mobile tap compatibility

render(<Routes store={store}/>, document.getElementById('root'))
