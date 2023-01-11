/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import { login } from '../controllers/auth.controller';

const router = express.Router();

router.route('/').post(login);

export default router;
