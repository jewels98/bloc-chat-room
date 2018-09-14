import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';
import * as firebase from 'firebase';

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
    constructor(props) {
        super(props);
        this.openingState = { activeRoom: 0, activeRoomName: '' };
        this.state = this.openingState;
        this.updateActiveRoom = this.updateActiveRoom.bind(this);
        this.resetActiveRoom = this.resetActiveRoom.bind(this);
    }

    // UTILITY FNS AND EVENT HANDLERS

    updateActiveRoom(ev) {
        if (this.state.activeRoom !== ev.target.id) {
            console.log('New active room!');
            console.log(ev.target.id);
            this.setState({
                activeRoom: ev.target.id,
                activeRoomName: ev.target.textContent,
            });
        }
    }

    resetActiveRoom() {
        console.log('No active room');
        this.setState(this.openingState);
    }

    render() {
        return (
            <div className="App">
                <Header
                    activeRoom={this.state.activeRoom}
                    activeRoomName={this.state.activeRoomName}
                />
                <main style={{ display: 'flex' }}>
                    <RoomList
                        firebase={firebase}
                        activeRoom={this.state.activeRoom}
                        updateActiveRoom={this.updateActiveRoom}
                        resetActiveRoom={this.resetActiveRoom}
                        deleteRoom={this.deleteRoom}
                    />
                    <MessageList
                        firebase={firebase}
                        activeRoom={this.state.activeRoom}
                    />
                </main>
                <aside className="App-intro">
                    <User
                        firebase={firebase}
                        activeRoom={this.state.activeRoom}
                    />
                </aside>
            </div>
        );
    }
}

export default App;
