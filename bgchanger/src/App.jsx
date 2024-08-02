import { useState } from 'react'

function App() {
  const [color, setColor] = useState("Black")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
    <div className='fixed flex justify-center top-12 inset-x-0'> 
    <div className=' flex justify-center bg-white px-3 py-2 rounded-3xl shadow-lg gap-3'>
    <button className='px-4 py-1 outline-none w-full rounded-full text-white'
    style={{backgroundColor:"red"}}
    onClick={()=> setColor("red")}
    >Red</button>
      <button className='px-4 py-1 outline-none w-full rounded-full text-white'
    style={{backgroundColor:"green"}}
    onClick={()=> setColor("green")}
    >Green</button>
    <button className='px-4 py-1 outline-none w-full rounded-full text-white'
    style={{backgroundColor:"pink"}}
    onClick={()=> setColor("pink")}
    >pink</button>
    <button className='px-4 py-1 outline-none w-full rounded-full text-white'
    style={{backgroundColor:"Blue"}}
    onClick={()=> setColor("Blue")}
    >Blue</button>
    <button className='px-4 py-1 outline-none w-full rounded-full text-white'
    style={{backgroundColor:"Olive"}}
    onClick={()=> setColor("Olive")}
    >Olive</button>
    <button className='px-4 py-1 outline-none w-full rounded-full text-white'
    style={{backgroundColor:"RebeccaPurple"}}
    onClick={()=> setColor("RebeccaPurple")}
    >RebeccaPurple</button>
    <button className='px-4 py-1 outline-none w-full rounded-full text-white'
    style={{backgroundColor:"magenta"}}
    onClick={()=> setColor("Magenta")}
    >Magenta</button>
    <button className='px-4 py-1 outline-none w-full rounded-full text-white'
    style={{backgroundColor:"maroon"}}
    onClick={()=> setColor("Maroon")}
    >Maroon</button>
    <button className='px-4 py-1 outline-none w-full rounded-full text-white'
    style={{backgroundColor:"Navy"}}
    onClick={()=> setColor("Navy")}
    >Navy</button>
    <button className='px-4 py-1 outline-none w-full rounded-full text-white'
    style={{backgroundColor:"Lime"}}
    onClick={()=> setColor("Lime")}
    >Lime</button>
    <button className='px-4 py-1 outline-none w-full rounded-full text-white'
    style={{backgroundColor:"Black"}}
    onClick={()=> setColor("Black")}
    >Black</button>
    </div>
    </div>
    </div>
  )
}

export default App
