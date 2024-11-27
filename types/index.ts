export interface AuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
}

export interface UserState {
  id: string;
  name: string;
  email: string;
  gender: string | null;
  address: string | null;
}

export interface RegisterUser {
  name: string;
  email: string;
  password: string;
  gender: string | null;
  address: string | null;
}
