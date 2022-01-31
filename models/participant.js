const Sequelize = require("sequelize");
const Meeting = require("./meeting");
const db = require("../config/db");

const Participant = db.define("participant", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Participant;
