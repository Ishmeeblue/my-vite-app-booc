import React, { useContext } from 'react'
import { ShopContext } from '../context/shopcontext'
import  Title from './Title'

const latestcollection = () => {

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTION'}/>
      </div>
    </div>
  )
}

export default latestcollection
