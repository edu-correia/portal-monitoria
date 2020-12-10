const express = require('express');
const knex = require('./database'); 
const app = express();

app.use(express.json());
//Get, Post, Put, Delete

app.get('/topics', async (req, res) => {
    const results = await knex('topics');

    res.json(results);
})

app.listen(4281, () => console.log("Listening on port 4281!"));