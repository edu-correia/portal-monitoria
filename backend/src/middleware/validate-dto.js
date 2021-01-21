function validateDto(schema){
    return async(req, res, next) => {
        try{
            const validatedBody = await schema.validate(req.body);
            req.body = validatedBody;
            next();
        }catch(err){
            res.status(400).json(err);
        }
    }
}

module.exports = validateDto;