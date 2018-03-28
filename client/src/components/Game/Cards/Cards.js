import React from 'react'
import { Card } from './Card'
import {info} from './../../Info'

class Cards extends React.Component {

    render() {
        return (
            <section className="cards">
                <strong className="large">Your Cards</strong>
                
                <div className="cards">
                    {this.props.cards.map ( (card, index) => {
                        let description = `${description}          `
                        description = card.description.match(/\b[\w']+(?:[^\w\n]+[\w']+){0,1}\b/g)

                        return (
                            <div
                            key={index} 
                            onClick={this.props.handlePlayCard.bind(this, card)}
                            className="card">
                                <Card title={card.name} description={description} footer={card.effects} />
                            </div>
                        );
                    })}
                </div>
            </section>
        );
    }
};

export { Cards }
