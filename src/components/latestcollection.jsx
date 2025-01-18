import React, { useContext } from 'react'
import { shopcontext } from '../context/shopcontext'

const latestcollection = () => {

const {product}= useContext(shopcontext);

console.log(product);

  return (
    <div>
      
    </div>
  )
}

export default latestcollection
