/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { AxiosError } from 'axios';
import axiosClient from './axiosClient';
import { UsersResponse } from '../types/users';

const listUsers = async (): Promise<UsersResponse> => {
  try {
    const users = await axiosClient.get('/users');
    if (!users) throw Error();
    const data = users.data as UsersResponse;
    return await Promise.resolve(data);
  } catch (error) {
    const { message } = error as AxiosError;
    return await Promise.reject(message);
  }
};

export default listUsers;
