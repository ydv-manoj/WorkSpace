import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDSQnkRcXCtxyY1W7XgotXZqndwUr7-Qxw",
  authDomain: "my-money-2d4eb.firebaseapp.com",
  projectId: "my-money-2d4eb",
  storageBucket: "my-money-2d4eb.appspot.com",
  messagingSenderId: "1024079834512",
  appId: "1:1024079834512:web:bdb3753489f29c5c4f1715"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }