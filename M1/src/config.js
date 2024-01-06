require('dotenv').config()

const config = {
    ServerRunningPort: process.env.RUNNING_PORT || 3000,
};

module.exports = config;