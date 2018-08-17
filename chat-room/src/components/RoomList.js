import React, { Component } from 'react';


class RoomList extends Component {
    constructor(props) {
        super(props)
//  store the list of rooms, so add an array of rooms on component state object

        this.state = {
            rooms: [],
            newRoomName: '',
        };

// store firebase reference to rooms path onto the this keyword

this.roomsRef = this.props.firebase.database().ref('rooms');
this.updateRooms = this.updateRooms.bind(this);
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);

    }

    up

    //  Add componentDidmount method / register child_added event
    //  to this.roomRef

    componentDidMount() {
        this.updateRooms();
    }
    updateRooms(){
        this.roomsRef.on('child_added', snapshot => {
            const room = snapshot.val();
            room.key = snapshot.key;
            this.setState({ rooms: this.state.rooms.concat (room)});
        });
    }

        handleChange(ev){
            this.setState({ newRoomName: ev.target.value });
        }

        handleSubmit(ev) {
            ev.preventdefault();
            this.roomsRef.push().set({ name: this.state.newRooName });
        }


    render(){
        // array map over state.rooms and return a div with room.name for each array item
        return (
            <div className="room-list">
                <h2>Welcome!</h2>
                <div id="rooms">
                    {this.state.rooms.map((room, index) => (
                     <h2 key={index}>{room.name}</h2>   
                    ))}
                </div>
                <form  classname="room-form" onSubmit={e => this.handleSubmit(e)}>
                    <input type="text"
                        value={this.state.newRoomName}
                        onChange={e => this.handleChange(e)}
                    />
                    <input type="submit" value="Create a new room" />
                </form>
            </div> 
        );
    }
}

export default RoomList;