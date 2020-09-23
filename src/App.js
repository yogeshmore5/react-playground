import React from 'react';
import PropContainer from "./PropContainer";
import LifeCycle from "./LifeCycle";
import Parent from "./Parent";
import Nav from "./Nav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends React.PureComponent {
  render(){
    return (
      <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Parent} />
          {/* to Pass props to component with route use render method.
          Do not invoke component with inline function to component attribute as component = { () => <YourComponentName data={}>}.
          This creates component every time it renders and hence affect the performance. Refer official doc for more info. */}
          <Route path="/PropContainer" exact render={() => <PropContainer name={`Shubhra`} div='Kingfisher' std={`Sr. KG`}/>}/>
          <Route path="/LifeCycle" exact render={ () => <LifeCycle message="Case 3: See Console log for LifeCycle Method's order" />} />


        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;