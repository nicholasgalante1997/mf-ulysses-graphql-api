const axios = require('axios').default;

const DEV_SERVER_API_CLAIMS = 'http://localhost:5002/claims';
const DEV_SERVER_API_USERS = 'http://localhost:5002/users'; 

const getAdvantagesByClaim = (id) => 
    axios.get(`${DEV_SERVER_API_CLAIMS}/${id}/advantages`)
    .then(({ data }) => data)
    .catch(err => console.error(JSON.stringify(err)));

const getAdvantagesByUser = (id) => 
    axios.get(`${DEV_SERVER_API_USERS}/${id}/advantages`)
    .then(({ data }) => data)
    .catch(err => console.error(JSON.stringify(err)));

module.exports = { getAdvantagesByClaim, getAdvantagesByUser };