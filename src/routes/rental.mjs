import { Router } from 'express';
import { RentalController, resolveRentalById } from '../controllers/RentalController.mjs';

const router = Router();

router.get('/get', RentalController.get);

router.post('/post', RentalController.post);

router.patch('/patch/:id', resolveRentalById, RentalController.patch);

export default router;