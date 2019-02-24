import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-17c0a.firebaseio.com/'
});

export default instance;
