import { submitAction } from './js/handleSubmit'
// import {checkURL} from './js/checkURL'

import './style/base.scss'

//add event listener (click on button)
document.getElementById('submit').addEventListener('click', submitAction)


export {
    // checkURL,
    submitAction
}


