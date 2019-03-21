const config = require('../mock/config');

module.exports = {
  devServer: {
    proxy: [{
      context: [config.proxyRootPath],
      target: `http://localhost:${config.port}`,
    }]
  }
};
