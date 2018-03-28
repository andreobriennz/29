import {info} from './../Info'

class Turn {
    constructor (state) {
        this.state = state
    }

    nextTurn  () {
        let round = this.state.round
        let currentPlayer = ++this.state.currentPlayer

        if (currentPlayer >= this.state.players.length) {
            currentPlayer = 0
            ++round
        }

        return {
            round: round,
            currentPlayer: currentPlayer
        }
    }
}

export {Turn}