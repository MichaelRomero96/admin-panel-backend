/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import { getUsers } from '../controllers/users.controller';

const router = express.Router();

router.route('/').get(getUsers);

export default router;
