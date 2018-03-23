class Player {
    constructor (name, isHuman = true) {
        this.name = name
        this.isHuman = isHuman

        this.cards = []
        this.stats = {}

        this.newGame()
        
        // this.pickUpCard()
        // this.pickUpCard()
    }

    newGame () {
        this.cards = []
        this.stats = {
            population: 100,
            shelters: 0,
            drones: 0,
            bombers: 0
        }
    }
};

export { Player }