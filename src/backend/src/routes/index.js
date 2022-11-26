const bodyParser = require("body-parser");

module.exports = app => {
    app.get('/', (req, res) => {
        res.status(200).json({ message: 'back-end diogo martins' });
    });
    app.use(bodyParser.json());
};
