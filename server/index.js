const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
  type Query {
    cats: [Cat!]!
  }

  type Cat {
    id: ID!
    name: String!
    age: Int!
    price: String!
  }
`

const cats = [
  { id: 1, name: 'Gayleen', age: 2, price: '$919.88' },
  { id: 2, name: 'Theodosia', age: 9, price: '$867.53' },
  { id: 3, name: 'Nissie', age: 10, price: '$991.95' },
  { id: 4, name: 'Elwira', age: 1, price: '$670.19' },
  { id: 5, name: 'Alicea', age: 5, price: '$949.68' },
  { id: 6, name: 'Elayne', age: 10, price: '$733.67' }
]

const resolvers = {
  Query: {
    cats: () => cats
  }
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))
