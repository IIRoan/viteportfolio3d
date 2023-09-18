import { useState } from 'react'
import './global.scss'
import Landing from './landing/landing'
import Navbar from './navbar/navbar'


function App() {

  document.body.style.margin = "0 7%";

  return (
    <>
      <Navbar />
      <Landing />

    </>
  )
}

export default App
