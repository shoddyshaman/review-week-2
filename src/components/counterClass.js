import React, { Component } from "react";

export class CounterClass extends Component {
  //all class components need a constructor & super to store state and pass arguments to parent class
  constructor() {
    super();
    this.state = { count: 0 };
  }

   handleCount = () => {
    this.setState({count:this.state.count + 1})
    console.log(this.state.count)
   }

  //render method is required for rendering the jsx on the viewport
  render() {
    return (
      <>
        <button onClick={this.handleCount}>Click me</button>
        <div>counterClass:{this.state.count}</div>
      </>
    );
  }
}

export default CounterClass;
