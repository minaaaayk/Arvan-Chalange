export interface IUser {
  email: string;
  token: string;
  username: string;
  bio?: string | null;
  image?: string | null;
  createdAt?: string;
  updatedAt?: string;
  id?: number;
}
