import React from 'react'

//Object destructuring is used on props object. Easy and short syntax
function PropContainer({name, div, std}) {
  // For inline style
  const styleOfComponent = {
    fontWeight: 'bold'
  }
  return (
    <div>
      <h5>Case 2: Passing Props to component</h5>
      <div><label style={styleOfComponent}>Name: </label> {name}</div>
      <div><label style={styleOfComponent}>Division: </label> {div}</div>
      <div><label style={styleOfComponent}>Standard:</label> {std}</div>
    </div>
  );
}

export default PropContainer;
