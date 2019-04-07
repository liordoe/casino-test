import { Router } from 'express';
import * as GamesController from 'server/controllers/GamesController';

const router = Router();

router.get('/games', GamesController.getGamesList);
router.get('/games/:id', GamesController.getGame);
router.post('/games', GamesController.addGame);
router.get('/fill', GamesController.useTestData);

router.get('/meta', GamesController.getMetaFields);

router.use('*', (req, res) => res.status(404).send('Wrong api url'));

export default router;
