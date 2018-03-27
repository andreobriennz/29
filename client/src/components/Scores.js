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
            <div>
                <section className="currentPlayer">
                    {this.state.currentPlayer === this.state.user ? (
                        <h2>YOUR TURN!</h2>
                    ) : (
                        <h2>{this.state.players[this.state.currentPlayer].name}'s Turn</h2>
                    )}
                </section>
                
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
            </div>
        )
    };
};

export { Scores }
