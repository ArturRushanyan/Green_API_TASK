const amqp = require('amqplib');
const config = require('../config');

class Producer {
    channel;
    connection;

    generateUuid() {
        return Math.random().toString() +
               Math.random().toString() +
               Math.random().toString();
      }

    async createChannel() {
        try {
            this.connection = await amqp.connect(config.rabbitMQ.url);
            this.channel = await this.connection.createChannel(); 
        } catch (error) {
            console.log('error =>>>', error.message);
            return;
        }   
    }

    async publishMessage(value) {
        if (!this.channel) {
            await this.createChannel();
        }

        const q = await this.channel.assertQueue('', { exclusive: true }); 
        const correlationId = this.generateUuid();

        
        const result = new Promise((resolve) => {
            this.channel.consume(q.queue, function(msg) {
                if (msg.properties.correlationId === correlationId) {
                    const result = msg.content.toString();
                    console.log(`= M1 Got the result: ${result}`);
                    resolve(result);
                }
            }, {
                noAck: true
            });    
        })
        console.log(`= M1 Sends ${value} and waits for the result`);
        this.channel.sendToQueue(config.rabbitMQ.rpc_queue,
            Buffer.from(value.toString()),
            {
                correlationId: correlationId,
                replyTo: q.queue 
            }
        );
        
        return result.then(returnValue => {
            this.connection.close();
            return returnValue;
        });
        
    }
}

module.exports = Producer;