import axios from 'axios';

const url = window.location.hostname === "localhost" ? "http://localhost:4281" : "https://portal-monitoria.herokuapp.com";

const api = axios.create({
    baseURL: `${url}/`,
})

export default api;