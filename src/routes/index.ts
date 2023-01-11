import express from 'express';
import usersRoutes from './users';
import authRoutes from './auth';

const router = express.Router();

router.use('/users', usersRoutes);
router.use('/login', authRoutes);

export default router;
