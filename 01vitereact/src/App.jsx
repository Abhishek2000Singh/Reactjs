import Chai from "./chai"

function App() {

const username = "Chai aur Code";

  return (
    <>
    {/* <h1>Chai aur React with Vite | Harshit</h1> */}
    <h1>Chai aur React || {username}</h1>
    <Chai/>
    <p>Hi this is fragment for returning multiple element</p>
    </>

  )
}

export default App


//we can return only one element at a time
//we can return multiple elements by using fragment i.e <> x no. of element </>
//we can return null or false

//{Variable} is called evaluated Expression..means final outcome will be stored here not like javascript that we will write the whole code using `{}`...only evaluated variable can be used here