import { Component } from "react";
import { cardImages } from './Card_Images/Images';

// Controls the card click functionality
class GameCards extends Component {
    characters = [];

    handleClick = (event) => {
        let character = event.target;

        // If the card has been found already, do nothing
        if (character.getAttribute("check") === "found") {
            return;
        }

        // Sets an array to hold the pair of clicked cards
        if (character !== this.characters[0]){
            this.switch(character);
            this.characters.push(character);
        }else{
            this.switch(character);
            this.characters = [];
        }

        // If the card pair array is larger than 2 cards flip them
        if (this.characters.length > 2){
            if (!this.checkName(this.characters[0], this.characters[1])){
                this.switch(this.characters[0]);
                this.switch(this.characters[1]);
                this.characters.shift();
                this.characters.shift();
            }else{
                this.characters.shift();
                this.characters.shift();
            }
        }

        // Check if pictures are flipped, if any
        let allPictures = document.getElementsByClassName("image-back");

        // If all the pictures are flipped
        if (allPictures.length < 1){
            this.props.endGame(true);

            let reset = document.getElementsByClassName("image");
            for (let i = 0; i < reset.length; i++){
                reset[i].classList.add("image-back");
                reset[i].setAttribute("check", "false");
                this.characters = [];
            }
        }
    };

    // Check if the pair matches
    checkName = (character1, character2) => {
        if (character1.getAttribute("name") === character2.getAttribute("name")) {
            character1.setAttribute("check", "found");
            character2.setAttribute("check", "found");
            return true;
        }
        return false;
    };

    // Flip unmatched cards
    switch = (target) => {
        if (target.getAttribute("check") === "true"){
            target.setAttribute("check", "false");
            target.classList.add("image-back");
        }else{
            target.setAttribute("check", "true");
            target.classList.remove("image-back");
        }
    };

    render(){
        return(
            <div className="images">
                {cardImages
                    .sort(() => Math.random() - 0.5)
                    .map((element) => {
                        return(
                            <div
                                className="image image-back"
                                name={element.name}
                                style={{background: `url(${element.picture})`}}
                                check="false"
                                onClick={this.handleClick}
                            />
                        );
                    })}                    
            </div>
        );
    }
}

export default GameCards;