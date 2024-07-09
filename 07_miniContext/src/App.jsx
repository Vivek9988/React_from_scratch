import './App.cszs'
import Login from './Component/Login'
import Profile from './Component/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {


  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profhiles />
    </UserContextProvider>
  )
}

export default App