
import './App.css'
import Login from './componeents/Login'
import Profile from './componeents/Profile'
import UserContextProvider from './context/UserCOntextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>Context API</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
