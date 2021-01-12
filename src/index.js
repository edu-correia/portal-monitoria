require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const {getFiltered, create, getSpecific} = require('./controllers/TopicController');
const {send} = require('./controllers/ReportController');

// TopicController
app.get('/topics', getFiltered);
app.post('/topics', create);
app.get('/specific/:id', getSpecific);

// ReportController
app.post('/report', send);

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}!`));