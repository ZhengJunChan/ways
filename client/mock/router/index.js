const path = require('path');

const config = require('../config');

const mockDishesApi = require('./routes/dishes');
const mockSalesApi = require('./routes/sales');

const setApiRouter = url => path.join(config.proxyRootPath, url);

module.exports = (router) => {
  mockDishesApi(router, setApiRouter);
  mockSalesApi(router, setApiRouter);
}
