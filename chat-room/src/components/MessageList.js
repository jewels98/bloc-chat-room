<<<<<<< HEAD
import React, { Component } from 'react';
import RoomList from './RoomList';
=======

import React, { Component } from 'react';
import './../styles/MessageList.css';
>>>>>>> chat-rooms-2

class MessageList extends Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.state = {
      messages: [],
      username: '',
      content: '',
      sentAt: '',
      roomId: ''
    };

    this.messagesRef = this.props.firebase.database().ref('messages');
    this.handleChange = this.handleChange.bind(this);
    this.createMessage = this.createMessage.bind(this);

=======

    this.state = {
      username: "",
      content: "",
      sentAt: "",
      roomId: "",
      messages: []
    }

    this.messagesRef = this.props.firebase.database().ref("messages");
    this.handleChange=this.handleChange.bind(this);
    this.createMessage=this.createMessage.bind(this);
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
>>>>>>> chat-rooms-2
  }

  componentDidMount() {
    this.messagesRef.on('child_added', snapshot => {
<<<<<<< HEAD
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat( message ) });
=======
      const messages = snapshot.val();
      this.setState({ messages: this.state.messages.concat( messages ) });
>>>>>>> chat-rooms-2
    });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
<<<<<<< HEAD
      username: 'BlocStudent',
      content: e.target.value,
      sentAt: this.props.firebase.database.ServerValue.TIMESTAMP,
      roomId: this.props.setActiveRoom
    });
  }

  createMessage(e) {
    e.preventDefault();
=======
      username: 'user',
      content: e.target.value,
      sentAt: this.props.firebase.database.ServerValue.TIMESTAMP,
      roomId: this.props.activeRoom
    })
  }

  createMessage(e) {
>>>>>>> chat-rooms-2
    this.messagesRef.push({
      username: this.state.username,
      content: this.state.content,
      sentAt: this.state.sentAt,
<<<<<<< HEAD
      roomId: this.state.roomId
    });
    this.setState({ 
        username: '', 
        content: '', 
        sentAt: '', 
        roomId: ''
    });
  }

  render() {
    return(
      <div>
      <ul>
        {this.state.messages.map((message) => {
          if (message.roomId === this.props.setActiveRoom) {
            return <li key={ message.key }>{message.content}</li>
          }
          null;
        })
      }
      </ul>
      <form onSubmit={this.createMessage} >
        <input type="text" value={this.state.content} onChange={this.handleChange} />
        <input type="submit" value="Submit"/>
      </form>
      </div>
    );
  }
}


export default MessageList;
=======
      roomId: this.props.activeRoom.key
    })
    this.setState({
      username: "",
      content: "",
      sentAt: "",
      roomId: ""
    })
  }

  handleMessageSubmit(e) {
    e.preventDefault();
    this.createMessage();
    this.setState({ content: "" });
  }

  render() {
    return (
      <div className="message-list">
        <h2 className="room-name">{this.props.activeRoom ? this.props.activeRoom.name : 'Please select a room' }</h2>
        <section className="message-group">
          <h1>Messages</h1>
          {this.state.messages.filter(message => message.roomId === this.props.activeRoom.key).map((message, index) =>
            <div key={index} className="messages">
              <p id="username">Username: {message.username}</p>
              <p id="content">Message: {message.content}</p>
              <p id="timestamp">Timestamp: {message.sentAt}</p>
            </div>
            )}
        </section>
        <div id="new-message">
          <form onSubmit={this.handleMessageSubmit}>
            <label>
              New Message:
              <input type="text" value={this.state.content} onChange={this.handleChange} placeholder="Enter Message" />
            </label>
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default MessageList
>>>>>>> chat-rooms-2
