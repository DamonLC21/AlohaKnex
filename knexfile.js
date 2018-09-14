// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/aloha-g95'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
