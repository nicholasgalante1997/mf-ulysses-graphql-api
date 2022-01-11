const axios = require('axios').default;

const DEV_SERVER_API_CLAIMS = 'http://localhost:5002/claims';

const getClaimTagsByClaim = (id) => 
    axios.get(`${DEV_SERVER_API_CLAIMS}/${id}/claim-tags`)
    .then(({ data }) => data)
    .catch(err => console.error(JSON.stringify(err)));

module.exports = { getClaimTagsByClaim };
