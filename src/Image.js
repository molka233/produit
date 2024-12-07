import React from 'react'
import product from './Product'
const Image = () => {
  return (
    <div>
      <img src={product.imageUrl} alt={product.name} style={{ width: "150px", height: "150px" }} />
    </div>
  )
}

export default Image
