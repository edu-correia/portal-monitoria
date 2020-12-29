import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:4281",
})

export default api;