import  React from 'react'
import { Input, Menu, Dropdown, Button, Grid, Divider, Header, Icon, Image} from 'semantic-ui-react'
import {observer} from 'mobx-react'
import {giphy_search, giphy_random} from './GiphyAPI.js'


@observer
export default class Search extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      active: 'Search',
      results: [],
      value: '',
      display_gif: {},
    }
  }

  componentDidMount(){
    //Function I made to display a random giph on home page
    giphy_random()
    .then((res)=>{
      this.setState({
        image: res.data.data.fixed_height_downsampled_url,
        display_gif: res.data.data
      })
    })
    .catch(err=>console.log(err))
  }

  gifDisplay = () =>{
    let val = this.state.display_gif
    try{
      //Random gif endpoint doesnt give full deta like search does
      let obj = {
        image: val.image_original_url,
        source: val.url,
        bitly_url: 'N/A',
        date: 'N/A',
        rating: 'N/A',
        slug: val.id
      }
      this.props.store.image_info = obj
      this.props.store.info_visibility = true
    }catch(e){
      console.log(e)
    }
  }


  //This function innitiates the search using my giphy API method: giphy_search
  searchGifs = (e, val) =>{
    //e is the event and val is the text value thats in the input field
    // everytime input field changes it calls the giphy_search method
    giphy_search(val)
    .then((res)=>{
        let new_arr = []
        //I sort out the array and create a new array with an obj that keys can be read by the dropdown
        for(var i = 0; i < res.data.data.length; i++){
          let el = res.data.data[i] // el is a variable made to make the sorting less confusing
          try{
            let obj = {
              key: i,
              image: el.images.preview_gif.url,
              description: el.trending_datetime,
              text: el.slug,
              obj: res.data.data[i] //I pass the whole object for later reference
            }
            new_arr.push(obj)
          }catch(e){
            console.log(e)
          }
        }
        this.setState({results: new_arr}) // arr is saved in state
    })
    .catch((err)=>console.log(err))
  }

  checkKeys = (e) =>{
    console.log('User input: ',e.key)
  }

  handleChange = (e, value) =>{
    //Invokes search function and passes input value
    this.searchGifs(e, e.target.value)
    //Sets new value for input
    this.setState({value: e.target.value})
  }

  selected = (e, val) =>{
    //I once again create a new object that cleans up confusion and pass it to my store
    try{
      let obj = {
        image: this.state.results[val.id].obj.images.original.url,
        source: this.state.results[val.id].obj.url,
        bitly_url: this.state.results[val.id].obj.bitly_gif_url,
        date: this.state.results[val.id].obj.import_datetime,
        rating: this.state.results[val.id].obj.rating,
        slug: this.state.results[val.id].obj.slug
      }
      this.props.store.image_info = obj //Store recieves the object
      this.props.store.info_visibility = true //Visibility for sidepanel changes to true
    }catch(e){
      console.log(e)
    }
  }

  render() {
    return (
      <div className='random-image-holder'>
        <Image style={{margin: '0 auto', maxHeight: '40%', maxWidth: '40%'}}
          href='javascript:void(0)'
          src={this.state.image}
          size='medium'
          onClick={this.gifDisplay}
        />
        <Dropdown fluid open
          icon={<Icon style={{display: 'none'}}/>}
          >
          <Dropdown.Menu
            style={{overflowY: 'hidden'}}
            scrolling
          >
            <Input icon='search'
              style={{color: 'red'}}
              fluid
              placeholder={'Search for '}
              value={this.state.value}
              onChange={this.handleChange}
            />
          <Dropdown.Menu scrolling>
          {
            this.state.results.map((obj)=>{
              return(
                <Dropdown.Item
                  description={obj.description}
                  image={obj.image}
                  text={obj.text}
                  onClick={this.selected}
                  key={obj.key}
                  id={obj.key}
                />
              )
            })
          }
          </Dropdown.Menu>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )
  }
}
