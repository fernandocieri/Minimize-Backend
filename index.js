const app = require('express')();
require('dotenv').config();
const cors = require('cors');
const port = 3003

app.use(cors({
    origin: process.env.FRONT_URL
}));

app.use(require('express').json());
app.use('/api', require('./routes'));

app.listen(port, () => {
    console.log(`Running on port ${port}! You're doing amazing!`);
})