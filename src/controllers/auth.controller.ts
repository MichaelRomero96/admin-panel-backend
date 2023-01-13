/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { AxiosError } from 'axios';
import { Request, Response } from 'express';
import { LoadStates } from '../types';
import listUsers from '../api/users';

const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const users = await listUsers();
    if (!users) throw Error();
    const filteredUser = users.filter((user) => user.email === email);
    if (filteredUser.length === 0) throw new Error('Email not registered');
    const userData = filteredUser[0];
    if (userData.password !== password) throw new Error('Wrong password');

    const { name, lastName, role } = userData;

    res.status(200).json({
      status: LoadStates.SUCCESS,
      msg: 'Successfully logged',
      userData: { name, lastName, email, role },
      users: users.map((user) => ({
        id: user.id,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
      })),
    });
  } catch (error) {
    const { message } = error as AxiosError;
    res.status(400).json({
      status: LoadStates.ERROR,
      msg: message,
    });
  }
};

export { login };
