import React from 'react'

import {deck} from './../models/Deck'

class NewCard extends React.Component {
    // pickUpCard () {
    //     let index = Math.floor(Math.random() * Math.floor(deck.cards.length))

    //     let newCard = deck.cards[index]

    //     let toRemove = deck.cards.indexOf(newCard)
        
    //     deck.cards.splice(toRemove, 1)
    // };
    
    render() {
        return (
            <section className="newCard">
                <button
                    onClick = {this.props.handleNewCard}
                    className="button">
                    Pick up card
                </button>
            </section>
        )
    };
};

export { NewCard }

        // button: onClick={game.players[0].pickUpCard}

        // game.players[0].cards.push(newCard)
        // console.log('add', newCard)
        // console.log('remove: ', deck.cards[toRemove])