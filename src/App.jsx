import React from "react"
import { Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Wallet from "./components/Wallet"
import Profile from "./components/Profile"
import Buy from "./components/Buy"
import Send from "./components/Send"



function App() {


  return (
    <>
      <Routes>
        <Route path="" element={<Wallet />} />
        <Route path="login" element={<Login />} />
        <Route path='profile' element={<Profile/>} />
        <Route path='buy' element={<Buy/>} />
        <Route path='send' element={<Send/>} />
      </Routes>
    </>
  )
}

export default App
