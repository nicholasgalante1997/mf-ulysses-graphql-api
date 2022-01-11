const axios = require('axios').default;

const DEV_SERVER_API_CLAIMS = 'http://localhost:5002/claims';
const DEV_SERVER_API_USERS = 'http://localhost:5002/users'; 

const getClaims = () => 
    axios.get(DEV_SERVER_API_CLAIMS)
    .then(({ data }) => data)
    .catch(err => console.error(JSON.stringify(err)));

const getClaim = (id) => 
    axios.get(`${DEV_SERVER_API_CLAIMS}/${id}`)
    .then(({ data }) => data)
    .catch(err => console.error(JSON.stringify(err)));

const getClaimByUser = (id) => 
    axios.get(`${DEV_SERVER_API_USERS}/${id}/claims`)
    .then(({ data }) => data)
    .catch(err => console.error(JSON.stringify(err)));

module.exports = { getClaim, getClaimByUser, getClaims };
