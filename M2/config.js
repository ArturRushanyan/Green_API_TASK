require('dotenv').config()

const config = {
    rabbitMQ: {
        url: process.env.AMQP_HOST,
        rpc_queue: process.env.RPC_QUEUE,
        exchangeName: "MultiplicationRequest"
    }
};

module.exports = config;