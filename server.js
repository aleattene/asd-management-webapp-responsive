
// Require the framework and instantiate it
import Fastify from 'fastify'

const fastify = Fastify({
    logger: true
})


fastify.register(import('./routes/index.js'))

// Run the server!
const start = async () => {
    try {
        await fastify.listen({ port: 3000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()