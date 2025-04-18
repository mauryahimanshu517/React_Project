import { useState } from "react";

function App() {
  
  let [counter,setCounter]=useState(0)

  function add(){
    setCounter(counter+1)
  }
  function decrement(){
    if(counter>=1)
    setCounter(counter-1)
  }
    return (
      <>
      <h1>Learning React {counter}</h1>
      <button onClick={add}>Add value</button>
      <button onClick={decrement}>Remove value</button>
      <p>{counter}</p>
      </>
    )
  }
  
  export default App
  