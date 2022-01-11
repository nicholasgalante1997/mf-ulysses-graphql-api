const axios = require('axios').default;

const DEV_SERVER_API_CLAIMS = 'http://localhost:5002/claims';
const DEV_SERVER_API_USERS = 'http://localhost:5002/users'; 

const getContrastByClaim = (id) => 
    axios.get(`${DEV_SERVER_API_CLAIMS}/${id}/contrasts`)
    .then(({ data }) => data)
    .catch(err => console.error(JSON.stringify(err)));

const getContrastByUser = (id) => 
    axios.get(`${DEV_SERVER_API_USERS}/${id}/contrasts`)
    .then(({ data }) => data)
    .catch(err => console.error(JSON.stringify(err)));

module.exports = { getContrastByClaim, getContrastByUser };
