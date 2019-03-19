const path = require('path');
const mockDishes = require('../../mock-data/dishes');

const domeAPI = url => path.join('/dome', url);

module.exports = (router) => {
  router.get(domeAPI('dishes'), ({ body, params: { eventId } }, response) => {
    response.status(200).send([ mockDishes ]);
  });
}
