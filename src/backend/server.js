const express = require("express"); 
const app = express();

const routes = require('./src/routes/index');

routes(app);

const port = process.env.PORT || 3030;

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
