const { GraphQLServer } = require('graphql-yoga')
const postGres = require('./postgres-model')

postGres.init()

const resolvers = {
  Query: {
    cats: () => postGres.get()
  }
}

const server = new GraphQLServer({
  typeDefs: './server/schemas/cats.graphql',
  resolvers
})

server.start(() => console.log('Server is running on localhost:4000'))
