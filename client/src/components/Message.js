import React from 'react'

class Message extends React.Component {    
    render() {
        return (
            <div className="message focus" data-component="message">
                <strong>Computer thinking</strong>
                <span className="close"></span>
            </div>
        )
    };
};

export { Message }