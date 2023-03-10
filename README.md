# Weather-Journal App Project

It is a single page web app with a single input field that accepts user URL input to run the analisys of the news article. 
This project required to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 
Web APIs and asynchronous functions were added, specifically, meaningcloud API was implemented to get weather based on the ZIP index of the city (in the USA). Dynamic UI update is also incorporated. 

## Composition of code
For this task I have used the starter code produced by Udacity and following steps were made:
1. Set up environment (installed Node, WebPack package (as a build tool) with loaders and plugins needed)
2. Set POST and GET routes on the server part
3. Acquire OpenWeatherMap API credentials to retrieve the weather data
4. Chain another Promise that makes a POST request to add the API data, as well as data entered by the user, to the app
5. Chain another Promise that updates the UI

## Run project
Below shows how to run in development and production mode.
### run in development mode
To start the webpack dev server at port 8000

` $ npm run build-dev`

### run in production mode
Generate the dist files and then start server in production mood

` $ npm run build-prod`
` $ npm run start`

## Configs
There are two webpack config files for both development mode(`webpack.config.dev.js`) and production mode(`webpack.config.prod.js` ) in this project.

## Offline Functionality
The project have service workers set up in webpack to provide the offline functionality of our app.

## Testing

Testing is done with Jest. To run test, use the command 

`npm run test`. 
