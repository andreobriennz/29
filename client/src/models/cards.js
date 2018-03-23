const cards = [
    {
        id: 'swarm',
        name: 'Swarm',
        description: 'Your population increases by 10 percent',
        effects: 'Drones',
        value: 10,
        url: false,
        totalInDeck: 20,
        effect: function (currentPlayer, opponent) {
            let unsheltered = opponent.stats.population - (opponent.stats.shelters * 10)
            let destroyed = 10

            if (unsheltered < 10) {
                destroyed = unsheltered
            }
            
            opponent.stats.population = opponent.stats.population - destroyed

            return {
                currentPlayer: currentPlayer,
                opponent: opponent
            }
        }
    },
    {
        id: 'bomber',
        name: 'Bomber Drone',
        description: 'Your population increases by 10 percent',
        effects: 'Bombers',
        value: 1,
        url: false,
        totalInDeck: 20,
        effect: function (currentPlayer, opponent) {
            if (opponent.stats.shelters > 0) {
                opponent.stats.shelters = --opponent.stats.shelters
            }

            return {
                currentPlayer: currentPlayer,
                opponent: opponent
            }
        }
    },
    {
        id: 'shelter',
        name: 'Shelter',
        description: 'Your population increases by 10 percent',
        effects: 'Population',
        value: 10,
        url: false,
        totalInDeck: 20,
        effect: function (currentPlayer, opponent) {
            currentPlayer.stats.shelters = currentPlayer.stats.shelters + 1

            return {
                currentPlayer: currentPlayer,
                opponent: opponent
            }
        }
    }    
];

export { cards }