const mockSales = require('../../mock-data/sales');

module.exports = (router, setApiRouter) => {
  // /api/sales
  router.get(setApiRouter('sales'), ({ body, params: { eventId } }, response) => {
    response.status(200).send(mockSales.list);
  });
}
