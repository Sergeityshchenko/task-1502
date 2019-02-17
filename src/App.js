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
    d: "",
    pi: "3.14",
    area: "",
    height: "",
    h1: "Hello",
    size: "",

    underline: false
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

    const pi = this.state.pi;
    let area = this.state.area;
    let height = this.state.height;

    let h1 = this.state.h1;
    let size = this.state.size;

    if (this.state.darkMode) {
      style = {
        color: "white",
        backgroundColor: "darkgrey",
        height: "100%"
      };
    }

    if (this.state.underline) {
      style = {
        textDecoration: "underline"
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
        <h1>{a + b + d}</h1>
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
        <hr />
        <h1>Home work</h1>
        <h1>Cylinder volume</h1>
        <hr />
        <p>Pi:</p>
        <input
          type="number"
          value="3.14"
          onChange={event => {
            this.setState({ pi: +event.target.value });
          }}
        />
        <p>Area:</p>
        <input
          type="number"
          value={this.state.area}
          onChange={event => {
            this.setState({ area: +event.target.value });
          }}
        />
        <p>Height:</p>
        <input
          type="number"
          value={this.state.height}
          onChange={event => {
            this.setState({ height: +event.target.value });
          }}
        />
        <h1>{pi * area ** 2 * height}</h1>
        <hr/>
        <h1>Font-Size: 'px'</h1>
        <br/>
        <h1>{h1}</h1>
        <input
          type="range"
          value={this.state.h1}
          onChange={event => {
            this.setState({ h1: event.target.value });
          }}
        />
        <hr />
        <h1>Text-Decoration: Underline</h1>
        <br />
        <input
          type="checkbox"
          onChange={event => {
            this.setState({ underline: event.target.checked });
          }}
        />
        Underline
      </div>
    );
  }
}

export default App;
