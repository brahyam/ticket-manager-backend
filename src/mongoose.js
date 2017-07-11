const mongoose = require('mongoose');

module.exports = function () {
  const app = this;

  mongoose.connect(process.env.MONGODB_URI);
  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
};
