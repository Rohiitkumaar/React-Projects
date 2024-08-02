import { useState,useCallback, useEffect, useRef } from 'react'
function App() {

  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [btnText, setBtnText] = useState("Copy");

const passwordRef = useRef(null)
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+= "1234567890";
    if(charAllowed)  str+= "?/><}{][)*&^%$#@!*-\|";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

  const copyFunction = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,15);
    window.navigator.clipboard.writeText(password)
    setBtnText("Copied");

    setTimeout(() => {
      setBtnText("Copy");
    },2000);

  }, [password])

  useEffect(() => {passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator])

  

  return (
    <>
      <div className='w-full max-w-md mx-auto px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='my-3 text-center text-white '>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type='text' ref={passwordRef} value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly/>
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800' onClick={copyFunction}>{btnText}</button>
      </div>
      <div className='flex text-sm gap-x-5'>
        <div className='flex items-center gap-x-1'>
          <input type='range' min={6} max={50} value={length} className='curser-pointer' onChange={(e) => setLength(e.target.value)}/>
          <label>length : {length}</label>

        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox' defaultChecked={numberAllowed} id='numberInput' onChange={() => {setNumberAllowed((prev) => !prev)}}/>
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox' defaultChecked={charAllowed} id='charInput' onChange={() => {setCharAllowed((prev) => !prev)}}/>
          <label htmlFor='charInput'>Characters</label>
        </div>
      </div>
       
      </div>
    </>
  )
}

export default App
