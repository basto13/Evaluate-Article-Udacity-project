import { updateUI } from './updateUI'
import { postData} from './postData'

//Integrating OpenWeatherMap API

function isValidUrl(inputText) {
    if (inputText === ''){
        return false
    }
    return true
}

function submitAction(event) {
    event.preventDefault();
    const inputText = document.getElementById('name').value;
    processAction(inputText, () => updateUI());
}

async function processAction(inputText, callback) {
    if (!isValidUrl(inputText)) {
        alert('This is not a valid URL. Try again, please')
        return
    }

    await postData('http://localhost:8000/post-my-data', { inputText })
    callback();
}



export { submitAction };