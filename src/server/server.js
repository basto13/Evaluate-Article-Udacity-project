const FormData = require('form-data');
// const checkURL = require('./checkURL');

const fetch = require("node-fetch-commonjs")


// load API key with env-package
const dotenv = require('dotenv');
dotenv.config();

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

console.log(__dirname)

// Setup Server
const port = 8000;

// Setup empty JS object to act as endpoint for all routes
const projectData = {};

//Spin up the server
const server = app.listen(port, listening);
//callback to debug
function listening() {
    console.log("server running");
    console.log(`running on localhost: ${port}`);
    return true
}

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// GET route 
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

const getAll = async (req, res) => {
    if (projectData) {
        res.send(projectData);
    }
}
app.get("/all", getAll);

// POST route
const postDataMethod = (data) => {
    console.log("server side location data posted", data);
    projectData['agreement'] = data.agreement;
    projectData['subjectivity'] = data.subjectivity;
    projectData['text'] = data.text;
    return projectData
}

app.post('/results', async (req, res) => {
    const data = await req.body;
    const projectData = postDataMethod(data);
    res.send(projectData);
});

app.post('/post-my-data', async (req, res) => {
    const data = await req.body;
    await processAction(data.inputText);
    res.send({});
});

const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';

async function processAction(inputText) {
    // get input values (Personal API Key for OpenWeatherMap API_)
    const formdata = new FormData();
    formdata.append("key", process.env.API_KEY);
    formdata.append("url", inputText);
    formdata.append("lang", "en")
    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };
    //call function to get Web API Coordination Data
    const data = await getInfoResponse(baseURL, requestOptions)

    const subjectivity = data.subjectivity
    const text = data.sentence_list[7].text
    const agreement = data.agreement
    console.log('info received from response', agreement, subjectivity, text)
    postDataMethod({ subjectivity: subjectivity, text: text, agreement: agreement })
}

const getInfoResponse = async (baseURL, requestOptions) => {
    try {
        const response = await fetch(baseURL, requestOptions)
        const json = await response.json()
        return json
    }
    catch (error) {
        console.log("error", error)
    }
}

module.exports = { getAll };