const express = require('express');
const knex = require('./database'); 
const app = express();

app.use(express.json());
//Get, Post, Put, Delete

app.get('/topics', async (req, res) => {
    const results = await knex('topics');

    return res.status(200).json(results);
})

app.post('/topics', async (req, res) => {
    const {
        title,
        subject,
        course,
        author,
        content
    } = req.body;

    try {
        await knex('topics').insert({title, subject, course, author, content});
    } catch (error) {
        return res.status(404).json({message: error});
    }

    return res.status(201).json({message: 'Success!'});
})

app.listen(4281, () => console.log("Listening on port 4281!"));