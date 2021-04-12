
// Router e o modulo do express para criar rotas
import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload'
import OrphanagesController from './controllers/OrphanagesController'

const routes = Router();
const upload = multer(uploadConfig);

// request e a mesma coisa de REQ e response e a mesma coisa de REQ
// index e listagem
routes.get('/orphanages', OrphanagesController.index);
// Vai voltar só um id especifico com o "show"
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;