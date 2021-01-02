const nodemailer = require('nodemailer');

module.exports = {
    async send(req, res) {
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
    }
}