/* eslint-env node */
module.exports = {
  title: 'Recitoir',
  template: 'client/index.ejs',
  apiEndpoint: process.env.API_ENDPOINT || 'https://localhost:3100'
};