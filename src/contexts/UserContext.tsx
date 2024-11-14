// context/UserProvider.tsx
"use client";
import React, {
  createContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";

interface UserContextProps {
  user: any; // Replace `any` with a specific type if you know the structure
  setUser: Dispatch<SetStateAction<any>>; // Replace `any` similarly
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null); // Replace `any` with a proper user type

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
