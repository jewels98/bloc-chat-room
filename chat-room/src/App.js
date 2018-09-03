import React, { Component } from 'react';
import * as firebase from 'firebase';
import MessageList from './components/MessageList';
import RoomList from './components/RoomList';
import './App.css';
import User from './components/User';





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
      activeRoom: '',
      activeUser: ''
    };
    
      this.setActiveRoom = this.setActiveRoom.bind(this);
      this.setUser = this.setUser.bind(this);
  }

  setActiveRoom(room) {
    this.setState({ activeRoom: room })
    console.log(this.state.activeRoom)
  }

  setUser(user) {
    this.setState({ activeUser: user });
  }


  render() {
    return (
      <div className="App">
      <main>
      <section id="sidebar"> 
       <RoomList firebase={firebase} 
       activeRoom={this.state.activeRoom} setActiveRoom={this.setActiveRoom}/>
       </section>
       <section id="main">
       <User
          firebase={firebase}
          setUser={this.setUser}
          user={this.state.activeUser} />
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
