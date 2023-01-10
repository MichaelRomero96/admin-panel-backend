import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://admin-panel-sample.onrender.com/', // json-server db
});

export default axiosClient;
