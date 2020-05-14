import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import CatProduct from './CatProduct.js'

function CatProductContainer (props) {
  const CAT_QUERY = gql`
    {
      cats {
        id
        name
        age
        price
      }
    }
  `

  return (
    <div className='cat-product-container'>
      <Query query={CAT_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const cats = data.cats

          return cats.map(cat => <CatProduct key={cat.id} cat={cat} />)
        }}
      </Query>
    </div>
  )
}

export default CatProductContainer
