import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  return (
    <>
      
      <h2>Counter : {counter}</h2>
      <div className="card">
        <button onClick={() => setCounter((counter) => counter + 1)}>
          Increase Count : {counter}
        </button>
      </div>
      <div className="card">
        <button onClick={() => {
          if(counter>0){
            setCounter(counter - 1)
          }
        }}>
          Decrease Count : {counter}
        </button>
      </div>
    </>
  )
}

export default App
