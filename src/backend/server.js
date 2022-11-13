const app = require('./src/app');

const port = process.env.PORT || 3030;

// app.get('/', (req, res) => {
//     res.status(200).send('sei la');
// }); 

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
