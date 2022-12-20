const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const db = require('./db')
const PartnerRouter = require('./routes/router')

const app = express()

const schema = buildSchema(`
    type Query { hello : String }
`)

const rootValue = {
    hello: () => `hello from Express GraphQL !`
}

app.use('/graphql',
    graphqlHTTP({
        schema,
        rootValue,
        graphiql: { headerEditorEnabled : true },
    })
)
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/api', PartnerRouter)

const port = process.env.PORT || 5000

app.listen(port,  ()=> {
    console.log(`Express GraphQL server running on http://localhost:${port}/graphql`)
})