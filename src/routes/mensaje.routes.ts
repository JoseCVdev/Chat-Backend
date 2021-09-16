import { Router } from 'express';
import { getMensaje, sendMensaje, sendMensajeV2 } from '../controllers/mensajeController';
const router = Router();

router.get('/mensajes', getMensaje);
router.post('/mensajes', sendMensaje);
router.post('/mensajes/:id', sendMensajeV2);
export default router;