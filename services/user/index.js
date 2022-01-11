const axios = require('axios').default;

const DEV_SERVER_API = 'http://localhost:5002/users';

const getUsers = () => 
    axios.get(DEV_SERVER_API)
    .then(({ data }) => data)
    .catch(err => console.error(JSON.stringify(err)));

const getUser = (id) => 
    axios.get(`${DEV_SERVER_API}/${id}`)
    .then(({ data }) => data)
    .catch(err => console.error(JSON.stringify(err)));

module.exports = { getUser, getUsers };
