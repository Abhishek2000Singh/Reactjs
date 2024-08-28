import './App.css'

function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL);
  //if using vite 
  console.log(import.meta.env.VITE_APPWRITE_URL);
  

  return (
    <>
      <h1>Chai aur Code with AppWrite</h1>
    </>
  )
}

export default App
