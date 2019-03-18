import path from 'path';
import mockDishes from '../../mock-data/dishes';

const domeAPI = url => path.join('/dome', url);

export default (router) => {
  router.get(domeAPI('dishes'), ({ body, params: { eventId } }, response) => {
    response.status(200).send([ mockDishes ]);
  });
};
