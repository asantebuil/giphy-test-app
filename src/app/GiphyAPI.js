import axios from 'axios'
//Axios is a light wait http library. I use it for promises functionality
const API_KEY = 'dc6zaTOxFJmzC'
//Each function returns a promise to be evoked later in the app
const giphy_search = function giphy_search(input){
  return axios.request({
      method:  "GET",
      url:     "/search",
      baseURL: "http://api.giphy.com/v1/gifs",
      headers: {},
      params:  {api_key: API_KEY, q:input}
    })
}

const giphy_random = function giphy_random(){
  return axios.request({
      method:  "GET",
      url:     "/random",
      baseURL: "http://api.giphy.com/v1/gifs",
      headers: {},
      params:  {api_key: API_KEY}
    })
}

const giphy_trending = function giphy_trending(){
  return axios.request({
      method:  "GET",
      url:     "/trending",
      baseURL: "http://api.giphy.com/v1/gifs",
      headers: {},
      params:  {api_key: API_KEY}
    })
}

module.exports = {
  giphy_search,
  giphy_random,
  giphy_trending
}
