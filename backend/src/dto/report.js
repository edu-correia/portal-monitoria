const yup = require('yup');

module.exports = yup.object().shape({
    topic_id: yup.number().required(),
    text: yup.string().required(),
    title: yup.string().required(),
    type: yup.string().required(),
    name: yup.string().required()
})