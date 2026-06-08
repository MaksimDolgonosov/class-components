export interface User {
  id: string;
  name: string;
  age: number;
  email: string;
  gender: 'select gender' | 'male' | 'female';
  country: string;
  image: string;
  terms: boolean;
}
