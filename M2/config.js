require('dotenv').config()

const config = {
    rabbitMQ: {
        url: process.env.AMQP_HOST,
        rpc_queue: process.env.RPC_QUEUE,
        exchangeName: process.env.EXCHANGE_NAME
    }
};

module.exports = config;