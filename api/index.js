const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const guestsRouter = require('./routes/guestsRouter');
const cors = require('cors');

dotenv.config({ path: 'environment/.env' });

const port = '3000';
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/guests', guestsRouter);

app.get('/ping', (req, res) => {
    res.status(200);
    res.send({
        status: 200,
        message: 'app is up and running',
    });
});

const server = app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});

module.exports = app;
module.exports.server = server;