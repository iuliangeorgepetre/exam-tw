const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const db = new Sequelize("examTW", process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: "postgres",
  port: process.env.DB_PORT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
module.exports = db;
