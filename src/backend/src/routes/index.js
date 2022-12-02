const bodyParser = require("body-parser");
const usuariosRouter = require('../routes/usuariosRouter');
const loginRouter = require('../routes/loginRouter');
const registerRouter = require('../routes/registerRouter');

module.exports = app => {
    app.get('/', (req, res) => {
        res.status(200).json({ message: 'back-end diogo martins' });
    });
    app.use(bodyParser.json(), usuariosRouter, loginRouter, registerRouter);
};
