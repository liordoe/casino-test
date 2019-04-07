import * as clientConfig from 'config/webpack/client.config';
import { Router } from 'express';
import path from 'path';
import APIRouter from 'server/routes/APIRouter';

const router = Router();

router.use('/api', APIRouter);
router.use('/*', (req, res) => res.sendFile(path.join(clientConfig.output.path, 'index.html')));

export default router;
