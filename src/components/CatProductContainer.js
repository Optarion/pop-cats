import React from 'react'
import CatProduct from './CatProduct.js'

function CatProductContainer (props) {
  const cats = [
    { id: 1, name: 'Gayleen', age: 2, price: '$919.88' },
    { id: 2, name: 'Theodosia', age: 9, price: '$867.53' },
    { id: 3, name: 'Nissie', age: 10, price: '$991.95' },
    { id: 4, name: 'Elwira', age: 1, price: '$670.19' },
    { id: 5, name: 'Alicea', age: 5, price: '$949.68' },
    { id: 6, name: 'Elayne', age: 10, price: '$733.67' }
  ]

  return (
    <div className='cat-product-container'>
      {
        cats.map(cat => <CatProduct key={cat.id} cat={cat} />)
      }
    </div>
  )
}

export default CatProductContainer
