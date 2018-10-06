import firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDi8nZTNaUnnBtb-qcNHk-nGjo4bJicUCU",
    authDomain: "stickies-49973.firebaseapp.com",
    databaseURL: "https://stickies-49973.firebaseio.com",
    projectId: "stickies-49973",
    storageBucket: "stickies-49973.appspot.com",
    messagingSenderId: "761836196228"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
