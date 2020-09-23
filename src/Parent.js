import React from "react";
import Message from "./Message";
import CallFromChild from "./CallFromChild";

class Parent extends React.Component{

  state = {messageDisplayed : 'old'};

  //Changing state on component mount to trigger re-render
  componentDidMount(){
    //this.setState({messageDisplayed: 'new'});
  }
  calledFromChild = (val) => {
    console.log('val ' ,val);
    this.setState({
      messageDisplayed: val
    })
  }
  render(){
    console.log('Parent Component is getting rendered');
    return(
      <div>
      <h4>Case 1: Avoid re-rendering of child component on state change of parent component</h4>
      <label>This is a parent component and below message coming from child component</label>
      <label style={{fontWeight:'bold'}}> Toggle from Child - {this.state.messageDisplayed}</label>
        <Message />
        <CallFromChild mDis={this.state.messageDisplayed}  func={this.calledFromChild} />
      </div>
    );
  }
}

export default Parent;
