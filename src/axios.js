import axios from "axios";

const instance = axios.create({
    //THE API (cloud function) URL
    baseURL: 'https://us-central1-clone-17b50.cloudfunctions.net/api'
    //'http://localhost:5001/clone-17b50/us-central1/api'
})

export default instance