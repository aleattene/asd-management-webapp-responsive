
import AutoLoad from '@fastify/autoload'
import Sensible from '@fastify/sensible'
import Env from '@fastify/env'
//import Cors from '@fastify/cors'
//import UnderPressure from '@fastify/under-pressure'
import S from 'fluent-json-schema'
import { join } from 'desm'


export default async function (fastify, opts) {
    // It's very common to pass secrets and configuration
    // to your application via environment variables.
    // The `fastify-env` plugin will expose those configuration
    // under `fastify.config` and validate those at startup.
    // TO FIX
    await fastify.register(Env, {
        schema: S.object()
            //.prop('NODE_ENV', S.string().required())
            //.prop('GITHUB_APP_ID', S.string().required())
            //.prop('GITHUB_APP_SECRET', S.string().required())
            //.prop('COOKIE_SECRET', S.string().required())
            //.prop('ALLOWED_USERS', S.string().required())
            .valueOf()
    })

    // Sensible adds many small utilities, such as nice http errors.
    await fastify.register(Sensible)

    // Autoload loads all the content from the specified folder, even the sub folders.
    await fastify.register(AutoLoad, {
        dir: join(import.meta.url, 'plugins'),
        options: Object.assign({}, opts)
    })

    await fastify.register(AutoLoad, {
        dir: join(import.meta.url, 'routes'),
        dirNameRoutePrefix: false,
        options: Object.assign({}, opts)
    })

}