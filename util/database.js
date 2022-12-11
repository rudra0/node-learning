const Sequelize = require("sequelize");

const sequelize = new Sequelize("nodelearning", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
