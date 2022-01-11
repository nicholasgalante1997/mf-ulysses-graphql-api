const axios = require('axios').default;

const DEV_SERVER_API_CLAIMS = 'http://localhost:5002/claims';
const DEV_SERVER_API_USERS = 'http://localhost:5002/users'; 

const getDetrimentsByClaim = (id) => 
    axios.get(`${DEV_SERVER_API_CLAIMS}/${id}/detriments`)
    .then(({ data }) => data)
    .catch(err => console.error(JSON.stringify(err)));

const getDetrimentsByUser = (id) => 
    axios.get(`${DEV_SERVER_API_USERS}/${id}/detriments`)
    .then(({ data }) => data)
    .catch(err => console.error(JSON.stringify(err)));

module.exports = { getDetrimentsByClaim, getDetrimentsByUser };
