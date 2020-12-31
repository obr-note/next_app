import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyABaIvVQkl1HQdL-efhULI8ILW4-A78Qg0",
  authDomain: "obrnote-react.firebaseapp.com",
  databaseURL: "https://obrnote-react-default-rtdb.firebaseio.com",
  projectId: "obrnote-react",
  storageBucket: "obrnote-react.appspot.com",
  messagingSenderId: "1027965329061",
  appId: "1:1027965329061:web:944a2b139e7ca0b726374c",
  measurementId: "G-JXCQKV3NPJ"
};

var fireapp;
try {
  firebase.initializeApp(firebaseConfig);
} catch (error) {
  console.log(error.message);
}
export default fireapp;

const initial = {
  login: false,
  username: '(click here)',
  email: '',
  data: [],
  items: []
}

function fireReducer(state = initial, action){
  switch (action.type){
    case 'UPDATE_USER':
      return action.value;
    default:
      return state;
  }
}

export function initStore(state = initial){
  return createStore(fireReducer, state, applyMiddleware(thunkMiddleware))
}