import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  msgStyle = {
    fontSize: "16pt",
    backgroundColor: "#eef",
    padding: "5px"
  }

  constructor(props){
    super(props)
    // this.state = {
    //   counter: 0,
    //   msg: 'counter: 0',
    // };
    this.doAction = this.doAction.bind(this);
    this.reset = this.reset.bind(this);
  }

  doAction(e){
    if (e.shiftKey){
      return this.props.dispatch({type: 'DECREMENT'});
    } else {
      return this.props.dispatch({type: 'INCREMENT'});
    }
  }
  // doAction(){
  //   this.setState((state) => {
  //     const num = state.counter + 1;
  //     return ({
  //       counter: num,
  //       msg: "counter: " + num
  //     });
  //   });
  // }

  reset() {
    return this.props.dispatch({ type: 'RESET' });
  }

  render(){
    return (
      <div>
        <p>{this.props.message}: {this.props.count}</p>
        <button style={this.style} onClick={this.doAction}>Count</button>
        <button style={this.style} onClick={this.reset}>Reset</button>
      </div>
    )
  }
  // render(){
  //   return <p onClick={this.doAction}
  //       style={this.msgStyle}>
  //     {this.state.msg}
  //   </p>;
  // }
}

Counter = connect((state) => state)(Counter);
export default Counter;