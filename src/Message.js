import React from "react";

class Message extends React.Component{
  constructor(props){
    super(props);
    this.state = { message: "Monitor console log of Message Component. Not re-rendering on updating state of Parent component state because shouldComponentUpdate is returning false"};
  }

  // Recommendation: Use React.PureComponent while extending class instead of using this lifecycle method
  //It should return false conditionally however for explaing the concept we are just returning false
  shouldComponentUpdate(){
    return false;
  }

  render() {
    console.log("Message Component is getting rendered!");
    return(
      <div>
        <p>{this.state.message}</p>
      </div>
    );
  }
}
export default Message;