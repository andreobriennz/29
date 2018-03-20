import React from 'react'

import {Player} from './../models/Player'
import {Scores} from './Scores'
import {Cards} from './Cards'
import {NewCard} from './NewCard'
import {Deck} from './../models/Deck'

// import uuid from 'uuid'

class Game extends React.Component {
    constructor () {
        super()

        this.state = {
            round: 1,

            players: [
                new Player ('Andre', true),
                new Player ('Computer', false)
            ],

            deck: new Deck (),

            _self: 0, // the user at the computer

            currentPlayer: 0, // can be human or AI
        }

        this.handler = this.handler.bind(this)
    }

    handler(e) {
        e.preventDefault()
        let players = this.state.players
        let deck = this.state.deck.cards

        let index = (
                Math.round(
                    Math.random() * (this.state.deck.cards.length - 1)
                )
            );
        
        let card = deck[index]

        players[this.state.currentPlayer].cards.push (card)
        deck.splice (index, 1)

        this.setState ({
            deck: {
                cards: deck
            },
            players: players
        })

        this.nextTurn ()
    }

    nextTurn () {
        let nextPlayer = this.state.currentPlayer + 1

        // if next player id is greater than the number of players counted from zero
        if (nextPlayer > this.state.players.length - 1) {
            this.nextRound ()
            return
        }
        
        this.setState ({
            currentPlayer: nextPlayer
        })

        // if (this.state._self === this.state.currentPlayer) {
        //     this.usersTurn ()
        // }
        // else {
        //     this.computerTurn ()
        // }
    }

    nextRound () {
        alert ()
    }

    render() {
        return (
            <article className="Game">
                <section className="currentPlayer">
                    {this.state.currentPlayer === this.state._self ? (
                        <h2>YOUR TURN!</h2>
                    ) : (
                        <h2>{this.state.players[this.state.currentPlayer].name}'s Turn</h2>
                    )}
                </section>

                <Scores round={this.state.round} players={this.state.players} />

                <Cards cards={this.state.players[this.state._self].cards} />

                {(this.state.currentPlayer === this.state._self) && 
                    <NewCard handler={this.handler} />}
            </article>
        )
    };
};

export { Game }


















    // static defaultProps = {}

    // lifecycle method
    // componentWillMount () {
    //     // this.setState (round = 2)
    //     // typically put API requests here, or componentDidMount

    //     this.setState (
    //         {test: [
    //             {
    //                 id: uuid.v4(),
    //                 name: ''
    //             },
    //             {
    //                 id: uuid.v4(),
    //                 name: ''
    //             }
    //         ]
    //     })
    // }

    // handleSubmit (e) {
    //     // called on submit with <form onSumbit={this.handleSubmit.bind(this)} />
    //     // e.preventDefault()
    //     // console.log (this.refs.title.value) // add refs attribute
    // }