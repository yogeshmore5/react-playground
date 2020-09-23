import React from "react";

class CallFromChild extends React.PureComponent{

  render() {
    console.log("CallFromChild Component is getting rendered!");
    let tre = this.props.mDis === 'new' ? 'old' : 'new';
    return(
      <div>
        Change Parent state - <button onClick={() => {this.props.func(tre)}}>Child Button</button>
      </div>
    );
  }
}
export default CallFromChild;