import React, {useState} from 'react'
import "./UseStateHook.css"

function UseStateHook() {
  let [teacherCount, addTeacher] = useState(0);



  return (
    <div className="useStateHook">
      <h4>Case 4: State Managment using hook in functional component</h4>
      <div>Number of teachers in the schools are {teacherCount}</div>
      <button disabled={ teacherCount >= 20 } onClick={() => addTeacher(++teacherCount)}>Add Teacher</button>
      <button disabled={ teacherCount < 1 } onClick={() => addTeacher(--teacherCount)}>Reduce Teacher</button>
    </div>
  )
}

export default UseStateHook;
