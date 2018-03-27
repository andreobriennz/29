import React from 'react'

import {deck} from './Deck'

class PickUp extends React.Component {    
    render() {
        return (
            <section className="PickUp">
                <button
                    onClick = {this.props.handlePickUp}
                    className="button">
                    Pick up card
                </button>
            </section>
        )
    };
};

export { PickUp }
