export interface UserRegister {
  userName: string;
  email: string;
  passwd: string;
  isOkConditions: boolean;
  turn: string;
  course: string;
};

export type User = Omit<UserRegister, 'passwd' | 'isOkConditions'> & {
  id: string;
};