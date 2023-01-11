export enum Roles {
  STANDARD = 'standard',
  ADMIN = 'admin',
}

export interface UserResponse {
  id: string;
  name: string;
  lastName: string;
  email: string;
  role: Roles;
  password?: string;
}

export type UsersResponse = UserResponse[];
