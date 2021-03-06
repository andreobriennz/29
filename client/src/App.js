import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'


import {Game} from './components/Game/Game'

class App extends Component {

    state = {
            response: ''
    };
    
      componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));
    };

    callApi = async () => {
        const response = await fetch('/api/hello')
        const body = await response.json()
    
        if (response.status !== 200) throw Error(body.message)
        console.log(body)
        return body
    };

    render() {
        return (
            <div className="App">

                {/* {this.state.response} */}

                <Game />
            </div>
        );
    }
};

export default App






















// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome...to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }