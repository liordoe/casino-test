import { Router } from 'express';
import * as GamesController from 'server/controllers/GamesController';
import * as ProvidersController from 'server/controllers/ProvidersController';

const router = Router();

router.get('/games', GamesController.getGamesList);
router.get('/games/:id', GamesController.getGame);
router.post('/games', GamesController.addGame);

router.get('/providers', ProvidersController.getProvidersList);

router.use('*', (req, res) => res.status(404).send('Wrong api url'));

export default router;
