import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Jake",
      company: "Microsoft",
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hii, {this.state.name}</p>
          <p>I am working at {this.state.company}</p>
          <button
            onClick={() => {
              this.setState({ name: "Jerry" });
            }}
          >
            Change name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
