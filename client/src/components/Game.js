import React from 'react'

import {Player} from './../models/Player'
import {Scores} from './Scores'
import {Cards} from './Cards'
import {NewCard} from './NewCard'

import {Deck} from './../models/Deck'

import {AI} from './../AI/AI'

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

        this._self = this

        this.handleNewCard = this.handleNewCard.bind(this)
        this.handlePlayCard = this.handlePlayCard.bind(this)
    }

    componentDidMount () {
        this.state.players.map((player, index) => {
            this.pickUpCard (index)
            this.pickUpCard (index)
            this.pickUpCard (index)
            this.pickUpCard (index)
        })
    }

    handleNewCard(e) {
        e.preventDefault()

        this.pickUpCard (this.state.currentPlayer)
        
        this.nextTurn ()
    }

    handlePlayCard(card, e) {
        e.preventDefault()

        this.playCard (card, 0, 1)
        
        this.nextTurn ()
    }

    pickUpCard (playerId) {
        let players = this.state.players
        let deck = this.state.deck.cards

        let index = (
                Math.round(
                    Math.random() * (this.state.deck.cards.length - 1)
                )
            );
        
        let card = deck[index]

        players[playerId].cards.push (card)
        deck.splice (index, 1)

        this.setState ({
            deck: {
                cards: deck
            },
            players: players
        })
    }

    nextTurn () {
        let currentPlayer = this.state.currentPlayer + 1
        let round = this.state.round

        // if next player id is greater than the number of players counted from zero
        if (currentPlayer > this.state.players.length - 1) {
            currentPlayer = 0
            round = round + 1
        }

        

        this.setState ({
            currentPlayer: currentPlayer,
            round: round
        })

        console.log ('New turn: currentPlayerId: ', currentPlayer)

        if (!this.state.players[currentPlayer].isHuman) {
            this.computersTurn (currentPlayer)
        }
    }

    computersTurn (currentPlayer) {
        const ai = new AI (this.state.players[currentPlayer], this.state.players[this.state._self])

        let card = ai.choose ()

        if (card === false) {
            // if ideal card doesnt exist, pick one up instead
            this.pickUpCard (currentPlayer)
            console.log ('Computer picked up')
        }
        else {
            card = card[0]
            this.playCard (card, 1, 0)
            console.log ('Computer played: ', card.name)
        }

        // this.nextTurn ()
    }

    playCard (card, currentPlayer, opponent) {
        let players = this.state.players

        // apply effects to temp array 
        const effect = card.effect (this.state.players[currentPlayer], this.state.players[opponent])
        players[currentPlayer] = effect.currentPlayer
        players[opponent] = effect.opponent

        const index = this.state.players[currentPlayer].cards.indexOf (card)
        players[currentPlayer].cards = this.state.players[currentPlayer].cards.splice (index, 1)

        // update this.players to equal temp array
        this.setState ({
            players: players
        })
    }

    render() {
        // console.log ('test name: ', this.state.players[this.state.currentPlayer].name)
        let _self = this
        return (
            <article className="Game">
                <section className="currentPlayer">
                    {this.state.currentPlayer === this.state._self ? (
                        <h2>YOUR TURN!</h2>
                    ) : (
                        <h2>{this._self.state.players[this._self.state.currentPlayer].name}'s Turn</h2>
                    )}
                </section>

                <Scores round={this.state.round} players={this.state.players} />

                <Cards 
                    handlePlayCard={this.handlePlayCard}
                    cards={this.state.players[this.state._self].cards} />

                {(this.state.currentPlayer === this.state._self) && 
                    <NewCard handleNewCard={this.handleNewCard} />}
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