import React, { Component } from 'react';
class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header className="App-header">
              
                <h1 className="App-title">
                    {this.props.activeRoom
                        ? "You're in the " + this.props.activeRoomName + ' room'
                        : 'Welcome to Bloc Chat! Choose a room...'}
                </h1>
            </header>
        );
    }
}
export default Header;
