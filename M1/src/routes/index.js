const multiplication  = require('./multiplication/index');

const indexRoutes = (app) => {
    app.use('/api/v1', multiplication);
};
 
module.exports = indexRoutes;