import React, { Component } from 'react';


class RoomList extends Component {
    constructor(props) {
        super(props)
//  store the list of rooms, so add an array of rooms on component state object

        this.state = {
            rooms: []
        };
// store firebase reference to rooms path onto the this keyword

this.roomsRef = this.props.firebase.database().ref('rooms');

    }

    //  Add componentDidmount method / register child_added event
    //  to this.roomRef

    componentDidMount() {
        this.roomsRef.on('child_added', snapshot => {
            const room = snapshot.val();
            room.key = snapshot.key;
            this.setState({ rooms: this.state.rooms.concat (room)})
        });
    }
    render(){
        // array map over state.rooms and return a div with room.name for each array item

        let roomListRender = this.state.rooms.map((room) => {
            return<div key={room.name}>
                {room.name}
            </div>
        })

        return (
            <div>{roomListRender}</div>
        )
    }
}

export default RoomList;