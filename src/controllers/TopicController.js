const knex = require('../database');

class TopicController{
    async getFiltered(req, res){
        const { subject } = req.query;
    
        let results;
    
        if(subject) {
            results = await knex('topics').select('id', 'title', 'subject', 'course', 'author').where('course', subject);
        }else{
            results = await knex('topics').select('id', 'title', 'subject', 'course', 'author');
        }
    
        return res.status(200).json(results);
    }

    async create(req, res){
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
    }

    async getSpecific(req, res){
        const { id } = req.params;
        
        let result;
        try {
            result = await knex('topics').where('id', id);
        } catch (error) {
            return res.status(404).json({message: error});
        }
    
        return res.status(200).json(result[0]);
    }
}

module.exports = new TopicController();