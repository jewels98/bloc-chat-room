import React, { Component } from 'react';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import './App.css';
import MessageList from './components/MessageList';




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
  constructor(props){
    super(props);

    this.state={
      activeRoom: ''
    }
    
      this.changeActiveRoom = this.changeActiveRoom.bind(this);
  }

  changeActiveRoom(room) {
    this.setState({ activeRoom: room })
    console.log(this.state.activeRoom)
  }


  render() {
    return (
      <div className="App">
      <main>
      <section id="sidebar"> 
       <RoomList firebase={firebase} 
       activeRoom={this.state.activeRoom} changeActiveRoom={this.changeActiveRoom}/>
       </section>
       <section id="main">
       <MessageList
       firebase={firebase} 
       activeRoom={this.state.activeRoom} />
       </section>
       </main>
      </div>
    );
  }
}

export default App;
