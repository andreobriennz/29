import { cards } from './../../../models/cards'

// import { l } from './../common'

const data = {
    cards: cards
}

const Deck = {
    cards: [],

    buildDeck: () => {
        this.cards = []

        cards.forEach(card => {
            let total = card.totalInDeck
            for (let i = 0; i < total; i++) {
                this.cards.push (card)
            }
        });

        return this.cards
    },

    shuffleDeck: () => {
        this.buildDeck ()

        // should then remove the cards in players hands
        // then use this function when cards run out

        return this.cards
    }
};

export { Deck }
