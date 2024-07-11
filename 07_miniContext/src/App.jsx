import React from 'react'
import Login from './Component/Login'
import Profile from './Component/Profile'
import UserContextProvider from './Context/UserContextProvider'
import Button from './Component/Button'

function App() {


  return (
    <UserContextProvider>
      <Button/>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App