const yup = require('yup');

module.exports = yup.object().shape({
    email: yup.string().required().email(),
    name: yup.string().required(),
    phone: yup.string().required().min(9),
    subject: yup.string().required(),
    topic: yup.string().required(),
    year: yup.string().required(),
    ra: yup.string().required()
})