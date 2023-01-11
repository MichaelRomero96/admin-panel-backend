/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { AxiosError } from 'axios';
import { Request, Response } from 'express';
import axiosClient from '../api/axiosClient';
import { LoadStates } from '../types';
import { UsersResponse } from '../types/users';
import { v4 as uuid } from 'uuid';

const getUsers = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await axiosClient.get('/users');
    if (!users) throw Error();
    const data = users.data as UsersResponse;
    /* remove passwords */
    const usersData = data.map(
      ({ id, name, lastName, email, role, password }) => ({
        id,
        name,
        lastName,
        email,
        role,
        password,
      })
    );
    res.status(200).json({
      status: LoadStates.SUCCESS,
      users: usersData,
      msg: 'success',
    });
  } catch (error) {
    const { message } = error as AxiosError;
    res.status(400).json({
      status: LoadStates.ERROR,
      msg: message,
    });
  }
};

const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await axiosClient.post('/users', {
      ...req.body,
      id: uuid(),
    });
    if (!response) throw Error();
    res.status(200).json({
      status: LoadStates.SUCCESS,
      msg: 'successfully created',
    });
  } catch (error) {
    const { message } = error as AxiosError;
    res.status(400).json({
      status: LoadStates.ERROR,
      msg: message,
    });
  }
};

const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await axiosClient.put(`/users/${req.params.id}`, req.body);
    if (!response) throw Error();
    res.status(200).json({
      status: LoadStates.SUCCESS,
      msg: 'Successfully updated',
    });
  } catch (error) {
    const { message } = error as AxiosError;
    res.status(400).json({
      status: LoadStates.ERROR,
      msg: message,
    });
  }
};

const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await axiosClient.delete(
      `/users/${req.params.id}`,
      req.body
    );
    if (!response) throw Error();
    res.status(200).json({
      status: LoadStates.SUCCESS,
      msg: 'Successfully deleted',
    });
  } catch (error) {
    const { message } = error as AxiosError;
    res.status(400).json({
      status: LoadStates.ERROR,
      msg: message,
    });
  }
};

export { getUsers, createUser, updateUser, deleteUser };
