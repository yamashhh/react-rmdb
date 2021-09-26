import { createContext, ReactNode, useState } from 'react';

export type User = {
  sessionId: string;
  username: string;
};

export type UserContext = [
  User | undefined,
  React.Dispatch<React.SetStateAction<User | undefined>>,
];

export const Context = createContext<UserContext | undefined>(undefined);

export function UserProvider({ children }: { children?: ReactNode }) {
  const [state, setState] = useState<User | undefined>(undefined);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
}
