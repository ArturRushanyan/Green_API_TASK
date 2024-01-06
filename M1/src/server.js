const bodyParser = require('body-parser');
const logger  = require('morgan');

const config = require('./config');

const startServer = async (app) => {
    app.use(logger('dev'));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.listen(config.ServerRunningPort, () => {
        console.log(`M1 Server is up on port: ${config.ServerRunningPort}`);
    });
};

module.exports = startServer;