import  React from 'react'
import { Grid, Divider, Header, Image} from 'semantic-ui-react'
import {giphy_trending} from './GiphyAPI.js'

export default class Trending extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      results: [],
      rows: []
    }
  }

  componentDidMount(){
    //Calls my giphy function to get the latest Trending giphs
    giphy_trending()
    .then((res)=>{
      let cols = []
      let rows = []
      //I use a loop to sort out rows and columns
      //Default giphs are 25 so i sort out 5 rows and 5 columns
      for(var i = 0; i < res.data.data.length; i++){
        let el = res.data.data[i]
        console.log(el)
          try{
          let obj = {
            key: i,
            image: el.images.preview_gif.url,
            description: el.import_datetime,
            text: el.slug,
            obj: el
          }
          cols.push(obj)
          if(i % 5 == 0){
            rows.push(cols)
            cols = []
          }
        }catch(e){
          console.log(e)
        }
      }
      this.setState({rows: rows})

    })
    .catch(err=>console.log(err))
  }

  handleChange = (e, val) =>{
    //Send a simpler object to my store
    try{
      let obj = {
        image: val.images.original.url,
        source: val.url,
        bitly_url: val.bitly_gif_url,
        date: val.import_datetime,
        rating: val.rating,
        slug: val.slug
      }
      this.props.store.image_info = obj
      this.props.store.info_visibility = true
    }catch(e){
      console.log(e)
    }

  }

  render(){
    return(
      <div>
      <Grid columns={5} divided>
        {
          this.state.rows.map((cols, i)=>{
            return(
              <Grid.Row key={'rowKey'+i}>
                {
                  cols.map((item, j)=>{
                    return(
                      <Grid.Column key={'columnKey'+j}>
                        <Image src={item.obj.images.original.url}
                          href='javascript:void(0)'
                          onClick={(event) => this.handleChange(event, item.obj)}
                        />
                      </Grid.Column>
                    )
                  })
                }
              </Grid.Row>
            )
          })
        }
      </Grid>
      </div>
    )
  }
}
