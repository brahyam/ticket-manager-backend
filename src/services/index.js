const products = require('./products/products.service.js');
const tickets = require('./tickets/tickets.service.js');
const users = require('./users/users.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(products);
  app.configure(tickets);
  app.configure(users);
};
