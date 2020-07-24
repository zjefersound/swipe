import axios from 'axios';

const api = axios.create({
    baseURL: 'https://swipeit-48a21.firebaseio.com'
});

export default api;