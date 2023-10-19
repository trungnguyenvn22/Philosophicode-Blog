import React, { useState, useContext, createContext } from "react";
import DashboardLayout from "../module/dashboard/DashboardLayout";
import {
  getCunrentUserRole,
  getCurrentUserDatail,
} from "../service/userService";

const AuthContext = createContext();
export const AuthData = () => {
  useContext(AuthContext);
};
const AppWrapper = () => {
  cosnt[(User, setUser)] = useState();
  const login = () => {};
  return (
    <AuthContext.Provider value={{}}>
      <>
        <DashboardLayout></DashboardLayout>
      </>
    </AuthContext.Provider>
  );
};

export default AppWrapper;
