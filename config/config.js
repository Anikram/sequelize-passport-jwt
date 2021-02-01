require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DEV_DATABASE_USER,
    password: process.env.DEV_DATABASE_PASSWORD,
    database: process.env.DEV_DATABASE_NAME,
    host: process.env.DEV_DATABASE_HOST,
    dialect: process.env.DEV_DATABASE_PROVIDER
  },
  test: {
    username: process.env.TEST_DATABASE_USER,
    password: process.env.TEST_DATABASE_PASSWORD,
    database: process.env.TEST_DATABASE_NAME,
    host: process.env.TEST_DATABASE_HOST,
    dialect: process.env.TEST_DATABASE_PROVIDER
  }
  // },
  // production: {
  //   username: process.env.PRODUCTION_DATABASE_USER,
  //   password: process.env.PRODUCTION_DATABASE_PASSWORD,
  //   database: process.env.PRODUCTION_DATABASE_NAME,
  //   host: process.env.PRODUCTION_DATABASE_HOST,
  //   dialect: "postgres"
  // }
}
