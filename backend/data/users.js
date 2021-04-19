const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin User",
    email: "admin@abc.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Arfaz Chougule",
    email: "arfaz@abc.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "David",
    email: "david@abc.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = users;
