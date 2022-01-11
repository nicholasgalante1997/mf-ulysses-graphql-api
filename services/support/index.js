const axios = require('axios').default;

const DEV_SERVER_API_CLAIMS = 'http://localhost:5002/claims';
const DEV_SERVER_API_USERS = 'http://localhost:5002/users'; 

const getSupportByClaim = (id) => 
    axios.get(`${DEV_SERVER_API_CLAIMS}/${id}/supports`)
    .then(({ data }) => data)
    .catch(err => console.error(JSON.stringify(err)));

const getSupportByUser = (id) => 
    axios.get(`${DEV_SERVER_API_USERS}/${id}/supports`)
    .then(({ data }) => data)
    .catch(err => console.error(JSON.stringify(err)));

module.exports = { getSupportByClaim, getSupportByUser };
