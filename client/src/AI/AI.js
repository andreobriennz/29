import {info} from './../components/Info'

const _ = require('lodash')

function percentWithoutShelter (population, shelters) {
    return population - shelters
}

function percentWithShelter (population, shelters) {
    return 100 - this.percentWithoutShelter (population, shelters)
}

class AI {
    constructor (state) {
        this.state = state

        this.user = state.currentPlayer
        this.cards = state.players[this.user]
        this.opponent = (state.currentPlayer === 0 ? 1 : 0)

        this.need = {
            swarm: 0,
            bomber: 0,
            shelter: 0
        }
    }

    choose () {
        let players = this.players

        this.determineNeeds (players)

        this.weights ()

        const max = _.max(Object.values(this.need))
        const best = (_.invert(this.need))[max]

        let want = []
        let kindaWant = []
        for (let i = 0; i < this.cards.cards.length; i++) {
            if (this.cards.cards[i].id === best) {
                want.push(this.cards.cards[i]) // choose card to play
            }
            else if (this.need[this.cards.cards[i].id] > max - 10) {
                kindaWant.push(this.cards.cards[i])
            }
        }

        want = [...want, ...kindaWant]

        info.event ('AI Decision', [this.need, best, want])

        info.log ('needs:')
        console.log (this.need)
        
        return want
    }

    determineNeeds (players) {
        let opponentWithoutShelter = percentWithoutShelter (
            this.state.players[this.opponent].stats.population, 
            this.state.players[this.opponent].stats.shelters
        )
        let opponentWithShelter = 100 - opponentWithoutShelter

        this.need.shelter = percentWithoutShelter (
            this.state.players[this.state.currentPlayer].stats.population,
            this.state.players[this.state.currentPlayer].stats.shelters
        )

        this.need.bomber = opponentWithShelter

        this.need.swarm = opponentWithoutShelter
    }

    weights () {
        // this.need.swarm

        // this.need.bomber
        this.need.bomber += 10
        if (this.state.players[this.opponent].stats.shelter < (this.state.players[this.opponent].stats.population * 10) 
            || this.state.players[this.opponent].stats.shelter == undefined) {
            this.need.bomber = 0
            info.error ('0 bomber need')
        }

        // this.need.shelter
        this.need.shelter += 30
        if (this.state.players[this.user].stats.population <= 60) {
            this.need.shelter = this.need.shelter * 1.6
        }
        if ((this.state.players[this.user].stats.shelter * 10) > (this.state.players[this.user].stats.population * 1.2)) {
            this.need.shelter = this.need.shelter * 0.8
        }
    }
}

export {AI}
