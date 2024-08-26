import React from "react"
import { Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Wallet from "./components/Wallet"



function App() {


  return (
    <>
      <Routes>
        <Route path="" element={<Wallet />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
