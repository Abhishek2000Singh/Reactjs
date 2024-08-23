import { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 15

  const addValue = () => {
    // console.log("Clicked", Math.random());
    // counter += 1
    // console.log("Clicked", counter+1);


    // setCounter((counter)=>counter+1)
    // setCounter((counter)=>counter+1)
    // setCounter((counter)=>counter+1)
    // setCounter((counter)=>counter+1)
    
    setCounter(counter + 1)
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter-1)
    }
    else {
      // setCounter(counter=0);
      setCounter(counter);
    }

  }

  return (
    <>
      <h1>Chai AUR React</h1>
      <h2>Counter Value : {counter}</h2>
      <button
        onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
        // onClick={() => setCounter(counter-1)}
        onClick={removeValue}
      >Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
