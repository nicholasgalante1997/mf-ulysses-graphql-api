const axios = require('axios').default;

const DEV_SERVER_API_TAGS = 'http://localhost:5002/tags';

const getAllTags = () => axios.get(DEV_SERVER_API_TAGS);
const getTag = (id) => axios.get(`${DEV_SERVER_API_TAGS}/${id}`);

module.exports = { getAllTags, getTag };
