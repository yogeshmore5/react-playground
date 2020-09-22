import React from 'react';
import PropContainer from "./PropContainer";
import LifeCycle from "./LifeCycle";
import Parent from "./Parent";

class App extends React.PureComponent {
  render(){
    return (
      <div>
        <h1>Hello React Folks!</h1>
        <Parent />
        <br/>
        <PropContainer name={`Shubhra`} div='Kingfisher' std={`Sr. KG`}/>
        <LifeCycle message="Case 3: See Console log for LifeCycle Method's order" />
      </div>
    );
  }
}

export default App;