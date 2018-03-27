import {Deck} from './Cards/Deck'

class Action {
    constructor (state) {
        this.state = state
    }

    pickUp (currentPlayer = this.state.currentPlayer, howMany = 1) {
        let players = this.state.players
        let deck = this.state.deck
        console.log(deck)

        if (typeof this.state.deck != 'undefined') {
            deck = this.state.deck
        }
        else {
            // deck = new Deck ().shuffleDeck ()
            console.error ('Outta cards. Shuffle')
            return
        }
        
        for (let i = 0; i < howMany; i++) {
            let index = (
                Math.round(
                    Math.random() * (deck.cards.length - 1)
                )
            );
        
            let card = deck.cards[index]

            // add to player index, default to current player
            players[currentPlayer].cards.push (card)
            deck.cards.splice (index, 1)
        }

        return {
            deck: deck,
            players: players
        }
    }

    playCard (card) {
        let players = this.state.players
        let currentPlayer = this.state.currentPlayer
        let opponent = (this.state.currentPlayer = 0 ? 1 : 0)

        // get cards effects, and update players with effects
        const effect = card.effect (this.state.players[currentPlayer], this.state.players[opponent])
        players[this.state.currentPlayer] = effect.currentPlayer
        players[opponent] = effect.opponent

        // remove card
        const index = this.state.players[currentPlayer].cards.indexOf (card)
        players[currentPlayer].cards = this.state.players[currentPlayer].cards.splice (index, 1)

        return {
            players: players
        }
    }
}

export {Action}