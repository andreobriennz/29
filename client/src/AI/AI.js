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
        for (let i = 0; i < this.cards.length; i++) {
            if (this.cards[i].id === best) {
                want.push(this.cards[i]) // choose card to play
            }
            else if (this.need[this.cards[i].id] > max - 10) {
                kindaWant.push(this.cards[i])
            }
        }

        want = [...want, ...kindaWant]

        info.event ('AI Decision', [this.need, best, want])

        if (want !== []) return want

        // prob better to return want = [] 
        return false // choose to pick up card
    }

    determineNeeds (players) {
        let opponentWithoutShelter = percentWithoutShelter (
            this.state.players[this.opponent].stats.population, 
            this.state.players[this.opponent].stats.shelters
        )
        let opponentWithShelter = 100 - opponentWithoutShelter

        this.need.shelter = percentWithoutShelter (
            this.state.players[this.user].population,
            this.state.players[this.user].shelters
        )

        this.need.bomber = opponentWithShelter

        this.need.swarm = opponentWithoutShelter
    }

    weights () {
        this.need.swarm

        this.need.bomber
        if (this.state.players[this.opponent].stats.shelter < 1) {
            this.need.bomber = 0
        }

        // this.need.shelter
        // if ((this.need.shelter * 10) > (this.state.players[this.opponent].stats.population * 1.2)) {
        //     this.need.shelter = this.need.shelter / 2
        // }
    }
}

export {AI}



















































// class AI {
//     // log all lessons, go over them to 'calibrate', 
//     // then each time returns weights AND alter weights for every relevant situation 
//     // (eg same user, same playing style, etc)
//     constructor (currentPlayer, players) {
//         this.learningMode = true

//         this.currentPlayer
//         this.players = players

//         this.user = players[currentPlayer]
//         // this.opponents = players.splice(currentPlayer, 1)

//         this.goal = this.user

//         console.log ('goal',this.goal)
//     }
//     ////////////////

//     decide () {        
//         // if (this.learningMode = true) this.tryNewMove ()
//         console.log(this.players[this.currentPlayer])
//     }

//     /////////////////

//     evaluateResult() {
        
//     }

//     tryNewMove () {
//         const index = Math.floor(Math.random() * Math.floor(deck.cards.length))
//         const pickUp = deck.cards[index]
//     }

//     // newLesson (lesson = {

//     // }) {
//     //     this.lessons.push (lesson)
//     // }


// };

// // new instance for each card

// export { AI }







// // say () {
// //     // eg 'Wow, you play quite aggressively!'
// //     // eg1 'You dont play as aggressively as some people. I hope that doesnt mean youre stockpiling cards'
// //     // eg3 'Come
// // }



// // this.lessons = [
// //     // save what was learnt each time (add to bias next time, and add more stringly if applicable to this player)
// //     // eg:
// //     {
// //         who: '',
// //         what: 'lost', // won, lost, tried something new, realised
// //         where: '', // ?
// //         why: '',
// //         how: '', // ?
// //         realisedAtRound: 10,
// //         weight: 10 // how strongly to remember this
        
// //     }
// // ]



//         // this.opponents.playingStyles = {
//         //     // aggressiveness: 0
//         // }