import React,{ useContext, useState, useEffect} from 'react'
import {ShopContext} from '../context/shopcontext'
import Title from './Title';
import ProductItem from './ProductItem';


const Latestcoll = () => {

  const {products} = useContext(ShopContext);
  const [latestProducts,setLatestProducts] = useState([]);

  useEffect(()=>{
    setLatestProducts(products.slice(0,2));
},{})

return (
    <div>
      <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTION'}/>
        <p className='w-3/4  m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Unleash your inner beauty with our latest collection, designed to empower and inspire confidence in every shade.
        </p>
      </div>
    </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
      {
        latestProducts.map((item,index)=>(
          <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price}/>
        ))
      }
      </div>

    </div>
  )
}

export default Latestcoll