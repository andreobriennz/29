import React from 'react'

class Scores extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            round: this.props.round,
            players: this.props.players
        }
    };

    render() {
        return (
            <section className="scores">
                <strong className="large">Round { this.state.round }</strong>

                <div className="scores">
                    {this.state.players.map(function(player, index){
                        return (
                            <div key={index} className="score">
                                <strong className="big">{ player.name }</strong>

                                <p>
                                    Population: { player.stats.population } <br/>
                                    Shelters: { player.stats.shelters } <br/>
                                    Drones: { player.stats.drones } <br/>
                                    Bombers: { player.stats.bombers } <br/>
                                </p>
                            </div>
                        )
                    })}
                </div>
            </section>
        )
    };
};

export { Scores }
