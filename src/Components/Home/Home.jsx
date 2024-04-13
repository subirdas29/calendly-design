import React from 'react'
import Navbar from '../Navbar/Navbar'
import FirstComponent from '../FirstComponent/FirstComponent'
import SecondComponent from '../SecondComponent/SecondComponent'
import ThirdComponent from '../ThirdComponent/ThirdComponent'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      <Footer></Footer>
    </div>
  )
}

export default Home
