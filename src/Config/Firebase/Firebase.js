import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/storage'
// import 'firebase/firebase-firestore'


var firebaseConfig = {
  apiKey: "AIzaSyDxqbES_k0J2A-Hk3odNgaFcvuvF7bjOBw",
  authDomain: "foodnetwork-2ee52.firebaseapp.com",
  databaseURL: "https://foodnetwork-2ee52.firebaseio.com",
  projectId: "foodnetwork-2ee52",
  storageBucket: "foodnetwork-2ee52.appspot.com",
  messagingSenderId: "181468274775",
  appId: "1:181468274775:web:776fad3030b117d1818312"
};

const firebaseApp= firebase.initializeApp(firebaseConfig);
export default firebaseApp;