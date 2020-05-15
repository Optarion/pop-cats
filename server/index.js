const { GraphQLServer } = require('graphql-yoga')
const express = require('express')
const postGres = require('./postgres-model')
const path = require('path')

postGres.init()

const resolvers = {
  Query: {
    cats: () => postGres.get()
  },
  Mutation: {
    createCat: (parent, args) => postGres.create(args),
    updateCat: (parent, args) => postGres.update(args),
    deleteCat: (parent, args) => postGres.delete(args)
  }
}

const server = new GraphQLServer({
  typeDefs: './server/schemas/cats.graphql',
  resolvers
})

const serverOptions = { playground: '/graphql' }

server.start(serverOptions, () => console.log('Server is running on localhost:4000'))

server.express.use(express.static(path.join(__dirname, '../build')))

server.express.get('*', (req, res, next) => {
  if (req.url === serverOptions.endpoint) return next()

  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})
