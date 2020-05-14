import React from 'react'

function CatProduct (props) {
  const { cat } = props

  return (
    <div key={cat.id} className='cat-product'>
      <div><img src='https://placekitten.com/300' alt={cat.name} /></div>
      <div>{cat.name}</div>
      <div>{cat.age}</div>
      <div>{cat.price}</div>
    </div>
  )
}

export default CatProduct
