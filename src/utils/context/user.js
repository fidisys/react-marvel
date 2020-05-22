import React, { createContext, useEffect, useState } from 'react';
import { getUserDetails } from '../services/userAPI';

const UserContext = createContext({});

const Context = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUserDetails(res => {
      setUser(res);
    });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export { Context, UserContext };
