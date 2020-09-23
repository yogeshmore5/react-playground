import React from "react";

class LifeCycle extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      studentCount : 0
    }
    //this.incrementCounter = this.incrementCounter.bind(this); //use this if function is declared with old school syntax
    console.log('Constructor is called');
  }

  incrementCounter = () => {
    this.setState((prevState)=> {
      return {
        studentCount: ++prevState.studentCount
      }
    })
  }
  static getDerivedStateFromProps(props, state){
    console.log('getDerivedStateFromProps is called ', props, state);
    return {};
  }
  /*UNSAFE_componentWillReceiveProps(){
    console.log('componentWillReceiveProps is called');
  }*/
  /*UNSAFE_componentWillMount(){
    console.log('componentWillMount is called');
  }*/
  /*
  UNSAFE_componentWillUpdate(nextProps, nextState){
    console.log('UNSAFE_componentWillUpdate is called');
  }
  */
  componentDidMount(){
    console.log('componentDidMount is called');
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate is called');
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('getSnapshotBeforeUpdate is called');
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('componentDidUpdate is called ', snapshot);
  }
  componentDidCatch(){
    console.log('componentDidCatch is called');
  }
  componentWillUnmount(){
    console.log('componentWillUnmount is called');
  }

  render(){
    console.log('Render is called');
    return (
    <div>
      <h4>{this.props.message}</h4>
      <div>Monitor of the class is {this.props.name}</div>
      <div>This class has {this.state.studentCount} students</div>
      <button onClick={ this.incrementCounter}>Add Student</button>
    </div>
    );
  }
}

export default LifeCycle;