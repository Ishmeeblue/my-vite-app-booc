import React,{ useContext, useState} from 'react'
import {ShopContext} from '../context/shopcontext'
import  Title from './Title'


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



    </div>
  )
}

export default Latestcoll