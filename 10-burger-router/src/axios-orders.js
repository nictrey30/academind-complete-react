import axios from 'axios';

const instance = axios.create({
  baseURL:
    'https://react-my-burger-ae5a2-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;
