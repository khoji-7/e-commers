import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import Collection from './pages/Collection';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Order from './pages/Order';
import Placeholder from './pages/Placeholder';
import Product from './pages/Product';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Searchbar from './components/Searchbar';
import './index.css';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] ms:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/> 
      <Navbar />
      <Searchbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/order' element={<Order />} />
        <Route path='/placeholder' element={<Placeholder />} />
        <Route path='/product/:productId' element={<Product />} />        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div> 
  );
};

export default App;
