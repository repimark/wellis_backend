import React from "react";
import {useLocation, Navigate, Outlet} from "react-router-dom";
import useAuth from "./Hooks/useAuth";

const RequiredAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();
    //console.log(auth)
    return (
        auth.username || sessionStorage.getItem("user") ? <Outlet/> : <Navigate to="/login" state={{from: location}} replace/>
    )
}
export default RequiredAuth;