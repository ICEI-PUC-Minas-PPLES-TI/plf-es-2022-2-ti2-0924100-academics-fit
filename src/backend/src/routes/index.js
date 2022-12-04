const bodyParser = require("body-parser");
const usuariosRouter = require('../routes/usuariosRouter');
const loginRouter = require('../routes/loginRouter');
const cadastrarRouter = require('./cadastrarRouter');

module.exports = app => {
    app.use(bodyParser.json(), usuariosRouter, loginRouter, cadastrarRouter);
};
