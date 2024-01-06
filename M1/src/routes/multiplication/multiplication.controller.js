const multiplicate = async (req, res) => {
    const number = req.body.value;
    const producer = new Producer();
    
    if (!number || isNaN(number)) {
        return res.status(400).json({ message: 'Please send number value' });
    } else {
        return res.status(200).json({ message: `Result is ${result}` });
    }
};


module.exports = {
    multiplicate
}