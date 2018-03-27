import {AI} from './../../AI/AI'

import {Action} from './../Game/Action'

class Computer {
    constructor (state) {
        this.state = state
    }

    takeTurn () {
        const ai = new AI (this.state)

        let card = ai.choose ()

        const action = new Action (this.state)

        let newState
        if (card == false || card == []) {
            newState = action.pickUp (this.state.currentPlayer)
            console.log ('Computer picked up')
        }
        else {
            newState = action.playCard (card[0])
            console.log ('Computer played: ', card[0].name)
        }

        return newState
    }
}

export {Computer}
