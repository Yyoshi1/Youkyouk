// ~/youkyouk/backend/routes/authRoutes.js
import express from 'express';
import { login, register } from '../controllers/authController.js'; // <- ملاحظة '..'

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

export default router;
