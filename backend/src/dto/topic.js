const yup = require('yup');

module.exports = yup.object().shape({
    title: yup.string().required(),
    subject: yup.string().required(),
    course: yup.string().min(4).max(4).required(),
    content: yup.string().required().max(15000)
})