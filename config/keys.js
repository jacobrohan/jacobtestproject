module.exports = {
  mongoURI: 'mongodb://tutrdb:tutrdb123@ds257851.mlab.com:57851/tutrapp',
  secret: 'sdfhskdjfhskdjbfskjvkjnvouhfpd'
};

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_prod');
} else {
  module.exports = require('./keys_dev');
}
