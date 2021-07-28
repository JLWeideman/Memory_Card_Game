import React, { Component } from 'react';

// Navbar is shown at the top  to display the user name and stats
class NavBar extends Component {
    render(){
        const {name, score} = this.props;
        return(
            <div className="navBar">
                <div className="game-Title">Memory Game</div>
                <div className="name">{name}</div>
                <div className="score">Score : {score}</div>
            </div>
        );
    }
}

export default NavBar;