import React, { useState } from 'react';
import './button.css'

function countInitial () {
 
  return 0

}

/*hooks need to be inside a function*/
function App() {
  /*useState always returns an array with two values*/
  /*the first thing in the array (below) is always the current state and the second thing is the function that allows you to update that current state*/
  const [count, setCount] = useState(countInitial)

function decrementCount () {
  setCount(prevCount => prevCount -1) /*here I'm taking my previous count and subtracting 1 from it*/
}

function incrementCount () {
  setCount(prevCount => prevCount +1)

}

  return (
    <div className="App">
     <button onClick={decrementCount} className="decrement-button">-</button>
     <span className="number">{count}</span>
     <button onClick={incrementCount} className="increment-button">+</button>
    </div>
  );
}

export default App;
