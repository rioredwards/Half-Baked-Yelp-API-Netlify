const fetch = require('node-fetch');
require('dotenv').config({ path: `.env.development.local` });

const handler = async (event) => {
  // add code here to fetch data from yelp API
  // be sure to include the parameters from event.queryStringParameters
  const zip = event.queryStringParameters.zip;
  const search = event.queryStringParameters.search;

  try {
    const response = await fetch(
      `https://api.yelp.com/v3/businesses/search?location=${zip}&term=${search}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.YELP_API_KEY}`,
        },
      }
    );

    const data = await response.json();
    const json = JSON.stringify(data.businesses);

    return {
      statusCode: 200,
      body: json,
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};

module.exports = { handler };
