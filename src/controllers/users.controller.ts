/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Request, Response } from 'express';
import axiosClient from '../../api/axiosClient';

const getUsers = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await axiosClient.get('/users');
    if (!users) throw new Error('error');
    res.status(200).json({
      status: 'ok',
      users: users.data,
    });
  } catch (e) {
    console.log(e);
  }
};

export { getUsers };
