require('dotenv').config();
const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next){
    if(!req.headers) return res.status(401).send({error: "Sem headers"})
    const authHeader = req.headers.authorization;

    if(!authHeader)
        return res.status(401).send({error: "No token provided"});

    const parts = authHeader.split(' ');

    if(parts.length !== 2)
        return res.status(401).send({error: "Token malformatted"});
    
    const [scheme, token] = parts;     

    if(!/^Bearer$/i.test(scheme)) 
        return res.status(401).send({error: "Token error"});

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if(err){
            return res.status(401).send({error: 'Invalid Token'})
        }

        req.userId = decoded.id;
        return next();
    });
}

module.exports = authMiddleware;