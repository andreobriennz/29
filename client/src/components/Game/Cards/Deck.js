import { cards } from './../../../models/cards'

// import { l } from './../common'

const data = {
    cards: cards
}

class Deck {
    constructor () {
        this.cards = []
        this.buildDeck()
    }

    buildDeck () {
        data.cards.forEach(card => {
            let total = card.totalInDeck
            for (let i = 0; i < total; i++) {
                this.cards.push (card)
            }
        });

        // this.cards = l.shuffle(this.cards)
    }

    shuffleDeck () {
        this.buildDeck ()

        // should then remove the

        return this.cards
    }
};

let deck = new Deck ()

export { Deck, deck }
