# giphy-test-app
Simple Test App using the Giphy Beta API

## My README
My Giphy app is a small single web app that allows users to search with the giphy API and get information from the images. The app uses React.JS, Webpack, React-Router, Semantic UI, and MobX.

To view a live demo you can access it here on my website: [GeekEnforcer](http://giphy.geekenforcer.com/)

If you want to build it build it locally run:
```shell
  NPM install NPM start
```

#### Task Details
- Consume the [Giphy Beta API](https://github.com/Giphy/GiphyAPI) to fetch *animated gifs* that match your search query.
- Create an interface with at least one input field to be used to search for gifs by keywords.
- Present the results in real time and update the interface as the user types his search query.
- Once the results are displayed allow the user to click on any particular gif to view its details.
- On the gif details section show at least *one version of the gif*, *source URL*, *content rating* and *import date*.
- Make your code and UI as clean as possible, be creative!
- *You have five business days from the moment you received the email linking to this repository to complete your task.*

#### Requirements
- You can fork this repo or make your own.
- Please use ES6, Typescript or ES5. *No CoffeeScript*.
- You must create a SPA.
- You can use any version of Angular, React or [Vue](https://vuejs.org/) (alternatively any framework you are most comfortable with).
- You can include a `package.json` or other build tools and processors (Webpack, Babel, SASS tools, etc.).
- You can use any CSS framework or make your own styles.
- Please provide any install or runtime instructions in the `readme.md`, make sure we can actually run your project.

---

#### Giphy Beta API Notes
The API does not require you to create your own API key. There's a public beta API key available for everyone: `dc6zaTOxFJmzC`, and it must be included in each request URL.

**CORS** is supported.

See the [official documentation](https://github.com/Giphy/GiphyAPI) topics for:
- [searching for gifs](https://github.com/Giphy/GiphyAPI#search-endpoint) (list of gifs)
- [viewing a gif by its ID](https://github.com/Giphy/GiphyAPI#get-gif-by-id-endpoint) (details)

<img src="logo_buildtext_white_forever.gif" width="300" />
