import React, { Component } from 'react';
import Login from './Login';
import Game from './Game';
import NavBar from './NavBar';
import EndGame from './EndGame';

class MainGameBoard extends Component {
    state = {
        showLogin: true,
        showEndGame: false,
        name: "",
        score: 0,
    };

    // Set the user name
    handleLogin = (name, bool) => {
        this.setState({name: name, showLogin: bool});
    };

    // Set the end game values
    handleEndGame = (bool) => {
        if (bool){
            this.setState({showEndGame: bool, score: this.state.score + 1});
        }else{
            this.setState({showEndGame: bool});
        }
    };

    render() {
        const {showLogin, name, score, showEndGame} = this.state;
        return(
            <div>
                {/** Decide if the login or the end game should show, if any */}
                {showLogin ? <Login name={this.handleLogin} /> : null}
                {showEndGame ? <EndGame newGame={this.handleEndGame} /> : null}
                <NavBar name={name} score={score} />
                <Game endGame={this.handleEndGame} />
            </div>
        )
    }
}

export default MainGameBoard;