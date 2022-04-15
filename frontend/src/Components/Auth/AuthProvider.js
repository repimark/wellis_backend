import React, {createContext, useState} from "react";
import ReactSession from "react-client-session";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{auth, setAuth, setSession}}>
            {children}
        </AuthContext.Provider>
    )
}
export const setSession = (props) => {
    sessionStorage.setItem("user", JSON.stringify(props))
}
export const logoutSession = () => {
    sessionStorage.removeItem("user");
}

export default AuthContext;