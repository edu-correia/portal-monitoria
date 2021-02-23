const knex = require('../database');
const nodemailer = require('nodemailer');

class NotifyController{
    async create(req, res){
        const { monitorId, course, name, ra, year, topic, email, phone } = req.body;
        try {
            await knex('classes').insert(req.body)
        } catch (error) {
            return res.status(404).json({message: error});
        }
    
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
            const [monitor] = await knex('monitors').select('email').where({id: monitorId});

            await transporter.sendMail({
                from: `Portal Monitoria <${process.env.TRANSPORT_EMAIL}>`,
                to: monitor.email,
                subject: `Monitoria de ${course}`,
                html: `<p>Olá monitor, ${name}(RA: ${ra}) do ${year} deseja marcar uma monitoria com você, o tema que ele deseja abordar é: <b>${topic}</b>.<h2>Contatos do aluno:</h2><span><b>Email:</b> ${email}</span><br><span><b>Telefone:</b> ${phone}</span><p><a href="https://api.whatsapp.com/send?phone=5519${phone}&text=Ol%C3%A1,%20vamos%20marcar%20a%20sua%20monitoria?" style="padding:10px;background-color: #25D366;color:#fff;"><b>Entrar em contato pelo whatsapp</b></a></p>`,
            });
        } catch (error) {
            return res.status(404).send({message: error});
        }

        return res.status(201).send({message: 'Success!'});
    }

    async list(req, res){
        let results;

        try {
            results = await knex('classes');
        } catch (error) {
            return res.status(404).json({message: error});
        }

        return res.status(200).json(results);
    }
}

module.exports = new NotifyController();