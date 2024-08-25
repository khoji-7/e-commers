import React from 'react'
import {Routes, Route} from "react-router-dom"
import Collection from './pages/Collection'
import Home from './pages/home'
import About from './pages/about'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Order from './pages/order'
import Placeholder from './pages/Placeholder'
import Product from './pages/Product'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import "./index.css"

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] ms:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='contact' element={<Contact/>} />
        <Route path='/order' element={<Order/>}/>
        <Route path='placeholder' element={<Placeholder/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App
