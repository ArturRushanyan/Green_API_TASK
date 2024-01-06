const amqp = require('amqplib');
const config = require('./config');

async function processNumber(number) {
    return new Promise(resolve => {
        setTimeout(() => {
            const result = number * 2;
            resolve(result);
        }, 5000);
    });
}

async function consumeMessages() {
    let connection;
    let channel;
    const rpc_queue = config.rabbitMQ.rpc_queue;

    try {
        connection = await amqp.connect(config.rabbitMQ.url);
        channel = await connection.createChannel();
    } catch (error) {
        console.log('error =>>>', error.message);
        return;
    }

    await channel.assertQueue(rpc_queue);
    channel.prefetch(1);

    await channel.consume(rpc_queue, async function reply(msg) {
        const number = parseInt(msg.content.toString());
        console.log(`= M2 Got the number: ${number}`);
        const result = await processNumber(number);
        console.log(`= M2 Sends the result: ${result}`);
        channel.sendToQueue(msg.properties.replyTo,
            Buffer.from(result.toString()), {
                correlationId: msg.properties.correlationId
            });
        channel.ack(msg);

    });

    console.log("M2 server is up and waiting!");
}

consumeMessages();