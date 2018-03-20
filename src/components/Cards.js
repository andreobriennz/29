import React from 'react'
import { Card } from './Card'

class Cards extends React.Component {
    constructor (props) {
        super (props)

        this.state = {
            cards: this.props.cards
        }
    }

    render() {
        return (
            <section className="cards">
                <strong className="large">Your Cards</strong>

                <div className="cards">
                    {this.state.cards.map(function(card, index) {
                        let description = description + '      '
                        description = card.description.match(/\b[\w']+(?:[^\w\n]+[\w']+){0,1}\b/g)

                        return (
                            <div 
                            key={index} 
                            className="card">
                                <Card onClick={} title={card.name} description={description} footer={card.effects} />
                            </div>
                        );
                    })}
                </div>
            </section>
        );
      }
};

export { Cards }
