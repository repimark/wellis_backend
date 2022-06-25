import axios from "../../../API/axios";
import React from "react";

export const RegisterController = async (username, password, email) => {
    let userData = {
        username: username,
        password: password,
        email: email
    }
    let response = await axios.post("register", userData)
    return response.data.affectedRows === 1 ? true : false;
}
export const checkPasswords = (password, passAgain) => {
    return password === passAgain ? true : "Nem egyeznek a jelszavak"
}
export const checkUser = async (username) => {
    let response = await axios.post("check/user", {username: username});
    return response.data[0].pc === 0 ? true : false
}
export const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
