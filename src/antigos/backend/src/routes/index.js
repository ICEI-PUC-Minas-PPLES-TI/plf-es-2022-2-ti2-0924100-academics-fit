const bodyParser = require("body-parser");
const loginRouter = require('../routes/loginRouter');
const cadastrarRouter = require('./cadastrarRouter');
const usuarioRouter = require('./usuarioRouter');
const alunoRouter = require('./alunoRouter');
const personalRouter = require('./personalRouter');

module.exports = app => {
    app.use(bodyParser.json(), usuarioRouter, loginRouter, cadastrarRouter, alunoRouter, personalRouter);
};
