require('dotenv').config()
const express = require('express');
const knex = require('./database');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/topics', async (req, res) => {
    const { subject } = req.query;

    let results;

    if(subject) {
        results = await knex('topics').where('course', subject);
    }else{
        results = await knex('topics');
    }

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

app.post('/report', async (req, res) => {
    const { name, title, text, topic_id, type } = req.body;

    const transporter = nodemailer.createTransport({
        host: process.env.TRANSPORT_HOST,
        port: process.env.TRANSPORT_PORT,
        secure: false,
        auth: {
            user: process.env.TRANSPORT_EMAIL,
            pass: process.env.TRANSPORT_PASSWORD,
        },
        tls: {
            rejectUnauthorized: false,
        }
    });


    try {
        await transporter.sendMail({
            from: `Portal Monitoria <${process.env.TRANSPORT_EMAIL}>`,
            to: [`${process.env.DEV_EMAIL1}`, `${process.env.DEV_EMAIL2}`],
            subject: `${type} - ${title}`,
            html: `<h2>${type} no tópico de ID: ${topic_id} feita por ${name}</h2> <h3>Conteúdo da denúncia</h3><br> ${text}`,
        });
    } catch (error) {
        return res.status(404).json({message: error});
    }

    return res.status(201).json({message: 'Success!'});
})

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}!`));