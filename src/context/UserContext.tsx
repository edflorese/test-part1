import { createContext, PropsWithChildren, useContext, useState } from "react";

interface User {
  username: string;
  password: string;
}
interface UserContextType {
  users: User[];
  addUser: (user: User) => void;
}

const UserContext = createContext({} as UserContextType);

export const UserProvides = ({ children }: PropsWithChildren) => {
  const [users, setusers] = useState<User[]>([]);
  const addUser = (user: User) => {
    setusers((prevUsers) => [...prevUsers, user]);
  };
  return (
    <UserContext.Provider
      value={{
        users,
        addUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
