import React, { Component } from "react";
import Images from "./GameCards";

// Renders the game field
class Game extends Component {
  render() {
    return (
      <div className="game">
        <Images endGame={this.props.endGame} />
      </div>
    );
  }
}

export default Game;