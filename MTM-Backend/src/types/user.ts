export interface User {
  email: string;
  firstName: string;
  lastName: string;
  userType: string;
}

export interface ResponseUser {
  id: number;
  email: string;
  userType: string;
}

export interface UserInput {
  id: number;
  uid: string;
  organizationId: number;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: number;
  role: string;
  household: string;
  userType: string;
}

export interface RawUserInput extends UserInput {
  currentUser: string;
}

export interface PasswordCombo {
  hash: string;
  salt: string;
}
