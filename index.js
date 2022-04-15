const app = require('express')();
const cors = require('cors');
const port = 3003

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(require('express').json());
app.use('/api', require('./routes'));

app.listen(port, () => {
    console.log(`Running on port ${port}! You're doing amazing!`);
})