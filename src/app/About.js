import  React from 'react'
import { Divider, Header} from 'semantic-ui-react'

export default class About extends React.Component {

  render(){
    return(
      <div style={{padding: '15px', width: '85%'}}>
        <Header>Giphy Test App</Header>
        <Divider/>
        <p>My Giphy app is a small single web app that allows users to search with the giphy API and get information from the images. The app uses React.JS, Webpack, Semantic UI, and MobX. You can find more about the app on the github repo:</p>
        <a href='https://github.com/asantebuil/giphy-test-app'> github.com/asantebuil/giphy-test-app </a>
      </div>
    )
  }
}
