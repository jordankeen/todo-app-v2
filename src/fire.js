
import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyB4hqhxmipdv5QHBVNB-4OPN7k4XzyEKjA",
    authDomain: "todo-app-v2.firebaseapp.com",
    databaseURL: "https://todo-app-v2.firebaseio.com",
    projectId: "todo-app-v2",
    storageBucket: "todo-app-v2.appspot.com",
    messagingSenderId: "932924526609"
};
const fire = firebase.initializeApp(config)
export { fire }
