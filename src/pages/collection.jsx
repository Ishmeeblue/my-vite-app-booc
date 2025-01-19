import React, { useContext } from 'react'
import ShopContext from '../context/shopcontext'
import Title from '../components/title';

const collection = () => {

const {products} = useContext(ShopContext);

  return (
    <div className='flex-1'>
      <div className='flex justify-between text-base sm:text-2xl  mb-4'>
      <Title text1={'ALL '} text2={'COLLECTION'} />
      </div>     
    </div>
  )
}

export default collection
