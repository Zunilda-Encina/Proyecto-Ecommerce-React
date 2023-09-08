import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import  '../src/App.css'
import Header from './component/Header.jsx'
import Banner from './component/Banner.jsx'
import Product from './component/Product.jsx'
import Footer from './component/Footer.jsx'

function App() {
  

  return (
    <>
      <Header/>
      <Banner />
      <Product/>
      <Footer/>
    </>
  )
}

export default App
