import React, { Component } from 'react';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import './App.css';




  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBTDG6kKJtM7hw6TpUjlUOvwGbYG6bD-q4",
    authDomain: "bloc-chats-3b3cc.firebaseapp.com",
    databaseURL: "https://bloc-chats-3b3cc.firebaseio.com",
    projectId: "bloc-chats-3b3cc",
    storageBucket: "bloc-chats-3b3cc.appspot.com",
    messagingSenderId: "854585793020"
  };
  firebase.initializeApp(config);


class App extends Component {
  render() {
    return (
      <div className="App">
       <RoomList firebase={firebase} />
      </div>
    );
  }
}

export default App;
