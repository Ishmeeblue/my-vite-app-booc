import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import Collection from './pages/Collection'
import Product from './pages/product'
import Cart from './pages/cart'
import Login from './pages/login'
import PlaceOrder from './pages/placeorder'
import Orders from './pages/orders'
import Navbar from './components/navbar'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/placeorder' element={<PlaceOrder/>}/>
        <Route path='/orders' element={<Orders/>}/>
      </Routes>

      <Footer />
      
    </div>
    
  )
}

export default App
