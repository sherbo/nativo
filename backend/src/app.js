'use strict'

const Fastify = require('fastify')
const GQL = require('fastify-gql')

const app = Fastify()

const schema = `
  type Query {
    add(x: Int, y: Int): Int
  }
`

const resolvers = {
    Query: {
        add: async (_, { x, y }) => x + y
    }
}

app.register(GQL, {
    schema,
    resolvers
})

app.get('/', async function (req, reply) {
    const query = '{ add(x: 2, y: 2) }'
    return reply.graphql(query)
})

app.listen(3000)