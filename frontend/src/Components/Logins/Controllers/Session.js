import React from "react";
import { ReactSession } from "react-client-session";

const Session = (props) => {
  
  return <>{props.children}</>;
};
export default Session;
export const setSession = (username) => {
  ReactSession.setStoreType("cookie")
  ReactSession.set("username", username);
};
export const logoutSession = () => {
    ReactSession.remove("username")
}
export const getSession = () => {
    return ReactSession.get("username")
}
