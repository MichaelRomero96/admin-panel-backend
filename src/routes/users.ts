/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from '../controllers/users.controller';

const router = express.Router();

router.route('/').get(getUsers).post(createUser);
router.route('/:id').put(updateUser).delete(deleteUser);

export default router;
