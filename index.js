const app = require('express')();
app.get('/', (req, res) => {
   res.send('Hello world!');
});
app.listen(80, () => {
    console.log('App listening on port 80!');
});