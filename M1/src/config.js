require('dotenv').config();

const config = {
    ServerRunningPort: process.env.RUNNING_PORT || 3000,   
    rabbitMQ: {
        url: process.env.AMQP_HOST,
        rpc_queue: process.env.RPC_QUEUE,
        exchangeName: process.env.EXCHANGE_NAME 
    }
};

module.exports = config;