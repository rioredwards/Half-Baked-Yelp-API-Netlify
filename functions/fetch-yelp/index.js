const fetch = require('node-fetch');
require('dotenv').config({ path: `.env.development.local` });

const handler = async (event) => {
  // add code here to fetch data from yelp API
  // be sure to include the parameters from event.queryStringParameters
};

module.exports = { handler };
