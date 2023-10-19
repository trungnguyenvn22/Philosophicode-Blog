import React, {
  useState,
  useContext,
  Context,
  createContext,
  useEffect,
} from "react";
import { AuthProvider } from "./auth-context";
import { getCunrentUserRole, isLoggedIn } from "../service/userService";

const AuthContext = createContext();
const AppProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState("");

  useEffect(() => {
    setLoggedIn(isLoggedIn());
    if (getCunrentUserRole() != "undefined") {
      setRole(getCunrentUserRole());
    }
    console.log("data useAuth:", loggedIn, role);
  }, [loggedIn, role]);

  const values = {
    isLogin: loggedIn,
    roleLoggin: role,
    setLoggedIn: setLoggedIn,
    setRole: setRole,
  };
  return (
    <AuthContext.Provider value={values} {...props}></AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined") {
    throw new Error("useAuth must be used within a AppProvider");
  }
  return context;
}

export default AppProvider;
