class AI {
    // log all lessons, go over them to 'calibrate', 
    // then each time returns weights AND alter weights for every relevant situation 
    // (eg same user, same playing style, etc)
    constructor (options, stats) {
        // this.cards = cards

        // this.stats = stats

        // this.card 

        this.learningMode = false

        this.bias = {
            population: 0,
            
        }

        this.opponent = {
            aggressiveness: 0
        }

        this.lessons = [
            // save what was learnt each time (add to bias next time, and add more stringly if applicable to this player)
            // eg:
            {
                who: '',
                what: 'lost', // won, lost, tried something new, realised
                where: '', // ?
                why: '',
                how: '', // ?
                realisedAtRound: 10,
                weight: 10 // how strongly to remember this
                
            }
        ]
    }

    say () {
        // eg 'Wow, you play quite aggressively!'
        // eg1 'You dont play as aggressively as some people. I hope that doesnt mean youre stockpiling cards'
        // eg3 'Come
    }

    tryNewMove () {
        lesson ()

        if (itWorked > 0.8) {
            // eg 
        }
        if (ifWorked < 0.2) {
            // eg 'Dammit. Why did I do that >.<'
            // lolololol
            // Noooooooo
        }
    }

    newLesson (lesson = {

    }) {
        this.lessons.push (lesson)
    }

    bestGuess () {

    }
};

// new instance for each card

export { AI }