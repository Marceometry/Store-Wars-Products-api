import { ApolloServer } from "apollo-server"
import mongoose from 'mongoose'

export default function startServer({ typeDefs, resolvers }) {
    require('dotenv/config')
    
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    const server = new ApolloServer({ typeDefs, resolvers })
    server.listen().then(({ url }) => console.log(`✨ Server started at ${url}`))
}