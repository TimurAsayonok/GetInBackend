import express, { Router } from 'express';

// Import actions from areas controller
import { getAreas } from './controllers/areas';
import { getEducations } from './controllers/educations';
import { getMetroStations } from './controllers/metroStations';
import { getOffers, findOffers } from './controllers/offers';
import {
  getUsers,
  loginUser,
  getFavoriteOffers,
  remindPassword,
  singUpUser,
  addFavoriteOffer,
  removeFavoriteOffer
} from './controllers/users';

const router = Router();

router.route('/areas')
  .get(getAreas);

router.route('/educations')
  .get(getEducations);

router.route('/metro_stations')
  .get(getMetroStations);

/** offer's methods */
router.route('/offers')
  .get(getOffers);
router.route('/find_offers')
  .post(findOffers);

/** user's methods */
router.route('/users')
  .get(getUsers);

router.route('/login')
  .post(loginUser);

router.route('/remind_password')
  .post(remindPassword);

router.route('/singup')
  .post(singUpUser);

router.route('/user/:user_id/favorite_offers')
  .get(getFavoriteOffers);

router.route('/user/:user_id/add_favorite_offer/')
  .put(addFavoriteOffer)
  .delete(removeFavoriteOffer);

export default router;