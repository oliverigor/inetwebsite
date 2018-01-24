import firebase from 'firebase';

  const config = {
    apiKey: "AIzaSyCXfWT0ngREFAe5ICME_9SBbGN-nxGwVk8",
    authDomain: "inetwebsite-fa204.firebaseapp.com",
    databaseURL: "https://inetwebsite-fa204.firebaseio.com",
    projectId: "inetwebsite-fa204",
    storageBucket: "",
    messagingSenderId: "1018664643036"
  };

  firebase.initializeApp(config);
  
  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();
  export default firebase;
