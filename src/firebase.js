import firebase  from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//Регистрация с помощью адреса почты
const firebaseConfig = {
    apiKey: "AIzaSyDXachIIiQZXhYdzHW4siF4X5N2TX8Be48",
    authDomain: "clone-17b50.firebaseapp.com",
    databaseURL: "https://clone-17b50.firebaseio.com",
    projectId: "clone-17b50",
    storageBucket: "clone-17b50.appspot.com",
    messagingSenderId: "764151644710",
    appId: "1:764151644710:web:4b1a8ec1a2f97ebf1a9ce7",
    measurementId: "G-HRW15K216T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth, db }
