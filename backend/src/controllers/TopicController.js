const knex = require('../database');

class TopicController{
    async getFiltered(req, res){
        const { subject } = req.query;
    
        let results;
    
        if(subject) {
            results = await knex('topics').select('id', 'title', 'subject', 'course').where('course', subject);
        }else{
            results = await knex('topics').select('id', 'title', 'subject', 'course');
        }
    
        return res.status(200).json(results);
    }

    async create(req, res){
        const {
            title,
            subject,
            course,
            content
        } = req.body;


    
        try {   
            await knex('topics').insert({title, subject, course, content, monitorId: req.userId});
        } catch (error) {
            return res.status(404).json({message: error});
        }
    
        return res.status(201).json({message: 'Success!'});
    }

    async update(req, res){
        try {
            await knex('topics').update(req.body).where({id: req.params.topicId})
        } catch (error) {
            return res.status(404).json({message: error});
        }

        return res.send();
    }

    async delete(req, res){
        try {
            await knex('topics').del().where({id: req.params.topicId});
        } catch (error) {
            return res.status(404).json({message: error});
        }

        return res.send();
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