import React, { Component } from 'react';
import {messages} from './Messages';

// Renders the end of game message and options
class EndGame extends Component {
    handleClick = () => {
        this.props.newGame(false);
    };

    render(){
        // Resorts the cards for the next game
        messages.sort(() => Math.random() - 0.5);

        return(
            <div className="end-game">
                <div className="message">
                    <h2>{messages[0].title}</h2>
                    <p>{messages[0].message}</p>
                    <button className="btn btn-primary" onClick={this.handleClick}>
                        Play Again
                    </button>
                    <br />
                    <button className="btn btn-primary" onClick={function(){window.location.reload()}}>
                        End Game
                    </button>
                </div>
            </div>
        );
    }
}

export default EndGame;