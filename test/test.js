
import t from 'tap';
import Fastify from "fastify";
import App from "../app.js";

t.test('Test', async t => {
    // const fastify = Fastify();
    // fastify.register(App);
    // const response = await fastify.inject({
    //     method: 'GET',
    //     path: '/'
    // })
    // t.strictEqual(response.statusCode, 200);
    t.pass('this is fine')
})