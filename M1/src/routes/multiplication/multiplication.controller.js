const Producer = require('../../RabbitMq/producer');

const multiplicate = async (req, res) => {
    const number = req.body.value;
    const producer = new Producer();
    
    if (!number || isNaN(number)) {
        return res.status(400).json({ message: 'Invalid input' });
    } else {
        const result = await producer.publishMessage(number);
        return res.status(200).json({ result });
    }
};

module.exports = {
    multiplicate
}