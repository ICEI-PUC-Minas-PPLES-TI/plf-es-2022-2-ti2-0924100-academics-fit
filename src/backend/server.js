const express = require("express"); 
const app = express();
const path = require("path");
const handlebars = require("express-handlebars");

const routes = require('./src/routes/index');
const port = process.env.PORT || 3030;

routes(app);


app.set('views', path.join(__dirname, 'src/views'));
app.use(express.static(__dirname + '/src/views'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/views/index.html');
});

app.get('/cadastrarAluno', (req, res) => {
    res.sendFile(__dirname + '/src/views/CadastrarAluno.html');
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
