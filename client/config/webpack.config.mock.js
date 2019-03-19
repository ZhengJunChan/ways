const config = require('../mock/config');

module.exports = {
  devServer: {
    proxy: {
      '/dome': {
        target: `http://localhost:${config.port}`,
      }
    }
  }
};
