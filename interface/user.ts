export type TRole = "customer" | "admin";

export interface IUser {
  uid: string;
  name: string;
  email: string;
  role: TRole;
  photoURL: string | null;
  emailVerified: boolean;
  service: string;
  createdAt: string;
  updatedAt: string;
  password: string;
  phone: string;
}
