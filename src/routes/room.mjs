import { Router } from 'express';
import { RoomValidationSchema } from '../utils/validationSchema.mjs';
import { checkSchema } from 'express-validator';
import { RoomController, resolveRoomById } from '../controllers/RoomController.mjs';

const router = Router();

// get all rooms
router.get('/room', RoomController.get);

// Add a room
router.post('/room', checkSchema(RoomValidationSchema), RoomController.post);

// Edit a room with patch method
router.patch('/room/:id', resolveRoomById, router.patch);

// Edit a room with put method
router.put('/room/:id', resolveRoomById, router.put);

// Delete a room
router.delete('/room/:id', resolveRoomById, router.delete);

export default router;