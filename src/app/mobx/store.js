import { observable } from "mobx"
var messageStore = []

class workstore {
  //prototype image_info to avoid undefined errors
  @observable image_info = {
    image: '',
    source: '',
    rating: '',
    giphy_url: '',
    date: '',
    slug: ''
  }
  @observable info_visibility = false //default sidebar property
}

var store = window.store = new workstore
export default store
