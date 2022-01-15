import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component {
  state = {
    deadline: 'December 20, 2021',
    newdeadline: ''
  }

  changeDeadline() {
    this.setState({ deadline: this.state.newdeadline });
  }

  render() {
    return (
      <div className="container App">
        <div className="row">
          <div className="col-md-12 mt-5">
            <h1 className="App-title">Countdown to {this.state.deadline}</h1>
            <Clock deadline={this.state.deadline} />
            <div className="mt-3 text-center">
              <input 
                type="text" placeholder="E.g December 20, 2021"
                onChange={e => this.setState({ newdeadline: e.target.value })}
              />
              <button onClick={() => this.changeDeadline()}>Submit</button>
              <footer>Developed by: SANUSI ABDULKADIR &copy; 2021</footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;