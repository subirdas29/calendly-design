import React from 'react'
import Navbar from '../Navbar/Navbar'
import FirstComponent from '../FirstComponent/FirstComponent'
import SecondComponent from '../SecondComponent/SecondComponent'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
    </div>
  )
}

export default Home
