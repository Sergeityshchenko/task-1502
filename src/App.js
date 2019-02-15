import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    darkMode: false,
    title: "Hello world!",
    name: "",
    x: "0",
    y: "",
    a: "0",
    b: "",
    d: ""
  };

  render() {
    let style = {};
    let title = this.state.title;
    let name = this.state.name;
    let x = this.state.x;
    let y = this.state.y;
    let a = this.state.a;
    let b = this.state.b;
    let d = this.state.d;

    if (this.state.darkMode) {
      style = {
        color: "white",
        backgroundColor: "darkgrey",
        height: "100vh"
      };
    }

    return (
      <div className="App" style={style}>
        <input
          type="checkbox"
          onChange={event => {
            this.setState({ darkMode: event.target.checked });
          }}
        />
        Dark mode
        <h1>{this.state.title}</h1>
        <input
          type="text"
          value={this.state.title}
          onChange={event => {
            this.setState({ title: event.target.value });
          }}
        />
        <h1>{"My name is" + this.state.name}</h1>
        <input
          type="text"
          value={this.state.name}
          onChange={event => {
            this.setState({ name: event.target.value });
          }}
        />
        <h1>
          Title is {title} and name is {name}
        </h1>
        <h1>{x + y}</h1>
        <input
          type="number"
          value={this.state.x}
          onChange={event => {
            this.setState({ x: +event.target.value });
          }}
        />
        <input
          type="number"
          value={this.state.y}
          onChange={event => {
            this.setState({ y: +event.target.value });
          }}
        />

        <h1>{(a + b) + d}</h1>
        <input
          type="number"
          value={this.state.a}
          onChange={event => {
            this.setState({ a: +event.target.value });
          }}
        />
        <input
          type="number"
          value={this.state.b}
          onChange={event => {
            this.setState({ b: +event.target.value });
          }}
        />
        <input
          type="number"
          value={this.state.d}
          onChange={event => {
            this.setState({ d: +event.target.value });
          }}
        />
      </div>
    );
  }
}

export default App;
