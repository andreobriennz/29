import {AI} from './../../AI/AI'

import {Action} from './../Game/Action'
import {info} from './../Info'

class Computer {
    constructor (state) {
        this.state = state
    }

    takeTurn () {
        const ai = new AI (this.state)

        let want = ai.choose ()

        const action = new Action (this.state)

        let newState
        if (want == false || want == []) {
            newState = action.pickUp (this.state.currentPlayer)
            info.event ('Computer picked up')
        }
        else {
            newState = action.playCard (want[0])
            info.alert ('Computer played: ', want[0].name)
        }

        return newState
    }
}

export {Computer}
