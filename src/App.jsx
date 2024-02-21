import { useState, useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify'
import './App.css'
import Routers from './routers'

function App() {

  // useEffect(() => {
  //   AOS.init();
  // }, []);

  return (
    <>
      <Routers />
      <ToastContainer />
    </>
  )
}

export default App
