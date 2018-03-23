const _ = require('lodash')

class AI {
    constructor (_self, opponent) {
        this.stats = _self.stats
        this.cards = _self.cards

        this.opponent = {}
        this.opponent.stats = opponent.stats

        this.need = {
            swarm: 0,
            bomber: 0,
            shelter: 0
        }
    }

    weights () {
        this.need.swarm

        this.need.bomber

        this.need.shelter + 10
    }

    percentWithoutShelter (population, shelters) {
        console.log('p'+population, 's'+shelters)
        return population - shelters
    }

    percentWithShelter (population, shelters) {
        return 100 - this.percentWithoutShelter (population, shelters)
    }

    determineNeeds () {
        let opponentWithoutShelter = this.percentWithoutShelter (
            this.opponent.stats.population, 
            this.opponent.stats.shelters
        )
        let opponentWithShelter = 100 - opponentWithoutShelter

        this.need.shelter = this.percentWithoutShelter (this.stats.population, this.stats.shelters)

        this.need.bomber = opponentWithShelter

        this.need.swarm = opponentWithoutShelter
    }

    choose () {
        this.determineNeeds ()

        this.weights ()

        const max = _.max(Object.values(this.need))
        const best = (_.invert(this.need))[max]

        console.log ('NEEDS:: ', this.need)
        console.log ('BEST:: ', best)

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

        console.log ('WANT:: ', want)

        if (want !== []) return want

        return false // choose to pick up card
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

//         this._self = players[currentPlayer]
//         // this.opponents = players.splice(currentPlayer, 1)

//         this.goal = this._self

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
//         const newCard = deck.cards[index]
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