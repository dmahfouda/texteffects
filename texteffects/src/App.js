import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {currentKey: ''}
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  
  handleKeyPress(e) {
    this.setState({currentKey: e.keyCode});
    if(e.keyCode === 27) {
      console.log('You just pressed Escape!');
    }
  }
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  
  render() {
    return(
      <div>
        The last key you pressed has the keycode: {this.state.currentKey} 
      </div>
    )
  }
}

export default App;

// handlePress(event){
//     console.log(event)
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Dont Learn React
//           </a>
//         </header>
//         <div>
//           <input type='text' id='one' onKeyPress={this.handlePress}  />
//         </div>
//       </div>
//     );
//   }
// }

