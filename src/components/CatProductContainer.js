import React from 'react'
import CatProduct from './CatProduct.js'

function CatProductContainer (props) {
  const cats = 

  return (
    <div className='cat-product-container'>
      {
        cats.map(cat => <CatProduct key={cat.id} cat={cat} />)
      }
    </div>
  )
}

export default CatProductContainer
