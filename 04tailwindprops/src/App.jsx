/* eslint-disable no-unused-vars */
import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)

  let myObj = {
    username: 'harshit',
    age:21
  }

  let newArr= [1,2,3,4]
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind Test</h1>
      {/* <Card username = "Chai Aur Code" someOb = {newArr}/> */}
      <Card username = "Chai Aur Code" btnText="click me"/>
      {/* <Card username="harshit" btnText = "visit me"/> */}
      <Card username="harshit"/>
    </>
  )
   
}

export default App
