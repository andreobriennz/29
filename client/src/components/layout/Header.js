import React from 'react'
import { user } from './../../models/User'

class Header extends React.Component {
    // in react, dont return false to prevent action, instead handle event with .preventDefault()
    // You have to be careful about the meaning of this in JSX callbacks. In JavaScript, class methods are not bound by default. If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.
    // This is not React-specific behavior; it is a part of how functions work in JavaScript. Generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method.
    // If calling bind annoys you, there are two ways you can get around this.

    // constructor(props) {
    //     super(props);
    //     this.state = {isToggleOn: true};
    
    //     // This binding is necessary to make `this` work in the callback
    //     this.handleClick = this.handleClick.bind(this);
    // }

    // handleClick() {
    //     this.setState(prevState => ({
    //         isToggleOn: !prevState.isToggleOn
    //     }));
    // }

    // render() {
    //     return (
    //       <button onClick={this.handleClick}>
    //         {this.state.isToggleOn ? 'ON' : 'OFF'}
    //       </button>
    //     );
    // }

    render() {
        return (
            <nav>
                <a href="/">Home</a>
                <a href="/how-to-play">How to Play</a>
                <a href="/play">Play</a>

                {user.isLoggedIn() ? (
                    <span>
                        <a href="/profile">Profile</a>
                        <a href="/logout">Log Out</a>
                    </span>
                ) : (
                    <span>
                        <a href="/login">Log In</a>
                        <a href="/signup">Sign Up</a>
                    </span>
                )}
                
            </nav>
        );
    }
};

export { Header }
