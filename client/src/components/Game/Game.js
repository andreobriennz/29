import React from 'react'

import {Message} from './../Game/Message'
import {Player} from './../../models/Player'
import {Scores} from './../Game/Scores'
import {Cards} from './Cards/Cards'
import {PickUp} from './Cards/PickUp'
import {info} from './../Info'
import {Turn} from './Turn'
import {Action} from './Action'

import {Deck} from './Cards/Deck'

import {Computer} from './../Computer/Computer'

// import uuid from 'uuid'

class Game extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            round: 1,
            user: 0, // the user at the computer
            currentPlayer: 0, // can be human or AI

            players: [
                new Player ('Andre', true),
                new Player ('Computer', false)
            ],


            deck: Deck.buildDeck ()
        }

        this.handlePickUp = this.handlePickUp.bind(this)
        this.handlePlayCard = this.handlePlayCard.bind(this)
    }

    componentDidMount () {
        this.state.players.map((player, index) => {

            const action = new Action (this.state)
            const newState = action.pickUp (index, 4)
            this.setState ({
                deck: newState.deck,
                players: newState.players
            })
        })
    }

    handlePickUp(e) {
        e.preventDefault()

        if (this.state.user === this.state.currentPlayer) {
            const action = new Action (this.state)
            const newState = action.pickUp ()
            this.setState ({
                deck: newState.deck,
                players: newState.players },
                
                function () {
                    info.event (this.state.currentPlayer+'picked up', [
                        this.state.players,
                        this.state.players[this.state.currentPlayer].cards
                    ])
    
                    this.nextTurn ()
                }
            )
        }
    }

    handlePlayCard(card, e) {
        e.preventDefault()
        
        if (this.state.user === this.state.currentPlayer) {
            const action = new Action (this.state)
            const newState = action.playCard (card)
            this.setState ({
                players: newState.players },
    
                function () {
                    info.event (this.state.currentPlayer+' played '+card, [
                        this.state.players
                    ])
    
                    this.nextTurn ()
                }
            )
        }
    }

    nextTurn () {
        const turn = new Turn (this.state)
        const newState = turn.nextTurn ()
        this.setState ({
            round: newState.round,
            currentPlayer: newState.currentPlayer },

            function () {
                info.event (`Next Turn: ${this.state.currentPlayer}`, [
                    'round:'+this.state.round,
                ])

                if (this.state.players[this.state.currentPlayer].isHuman === false) {                    
                    setTimeout(() => {
                        this.computersTurn ()

                        this.nextTurn ()
                    }, 1000);
                }
            }
        )
    }

    computersTurn () {
        const computer = new Computer (this.state)
        const newState = computer.takeTurn ()

        this.setState ({
            deck: newState.deck,
            players: newState.players },
            
            function () {
                // this.nextTurn ()
            }
        )
    }

    render() {
        return (
            <article className="Game">
                {(this.state.players[this.state.currentPlayer].isHuman === false) && 
                    <Message message="Computer thinking" />}

                <Scores 
                    name={this.state.players[this.state.currentPlayer].name} 
                    round={this.state.round} 
                    players={this.state.players} />

                <Cards 
                    handlePlayCard={this.handlePlayCard}
                    cards={this.state.players[this.state.user].cards} />

                {(this.state.currentPlayer === this.state.user) && 
                    <PickUp handlePickUp={this.handlePickUp} />}
            </article>
        )
    };
};

export {Game}



    // nextTurn () {
    //     let currentPlayer = this.state.currentPlayer + 1
    //     let round = this.state.round

    //     if (currentPlayer > this.state.players.length - 1) {
    //         currentPlayer = 0
    //         round = round + 1
    //     }

    //     this.setState ({
    //         currentPlayer: currentPlayer,
    //         round: round },

    //         function () {
                
    //             if (!this.state.players[this.state.currentPlayer].isHuman) {
    //                 this.computersTurn (this.state.currentPlayer)
        
    //                 this.nextTurn ()
    //             }
    //         }
    //     )
    // }






    // playCard (card, currentPlayer, opponent) {
    //     let players = this.state.players

    //     const effect = card.effect (this.state.players[currentPlayer], this.state.players[opponent])
    //     players[currentPlayer] = effect.currentPlayer
    //     players[opponent] = effect.opponent

    //     const index = this.state.players[currentPlayer].cards.indexOf (card)
    //     players[currentPlayer].cards = this.state.players[currentPlayer].cards.splice (index, 1)

    //     // update this.players to equal temp array
    //     this.setState ({
    //         players: players
    //     })
    // }