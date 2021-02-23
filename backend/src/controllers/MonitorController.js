const knex = require('../database');
const jwt = require("jsonwebtoken");
const Cryptr = require("cryptr");

const cryptr = new Cryptr(process.env.SECRET);

function generateToken(id){
    const token = jwt.sign({id}, process.env.SECRET, {
        expiresIn: 86400
    });

    return token;
}

class MonitorController{
    async register(req, res){
        const {password, ...rest} = req.body;
        const encryptedPassword = cryptr.encrypt(password);

        let results;
        try{
            results = await knex('monitors').insert({password: encryptedPassword, ...rest});
        }catch (error) {
            return res.status(404).json({message: error});
        }

        const userId = results[0];

        const token = generateToken(userId);

        return res.status(401).send({userId, token});
    }

    async authenticate(req, res){
        const {email, password} = req.body;

        const user = await knex('monitors').select('id', 'password').where({email});

        const userPassword = user[0].password;
        const userId = user[0].id;

        const decryptedPassword = cryptr.decrypt(userPassword);
        
        if(password !== decryptedPassword)
            return res.status(400).send({error: 'Invalid password'});

        const token = generateToken(userId);

        return res.status(200).send({token});
    }

    
}

module.exports = new MonitorController();