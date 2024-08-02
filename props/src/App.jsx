import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1 className='bg-green-400 rounded-xl text-black p-4 mb-16'>Tailwind CSS + props</h1>
      <Card Username = "Becca" />
      <Card Username = "Billy Butcher" btntext="Open Profile"/>
    </>
  )
}

export default App
