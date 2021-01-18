import axios from 'axios';

const api = axios.create({
    baseURL: "https://portal-monitoria.herokuapp.com/",
})

export default api;