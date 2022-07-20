import React from "react";
import axios from "../../../API/axios";


export const LoginController = async (username, password) => {
    let userData = {
        username: username, 
        password: password
    }
    let response = await axios.post("login", userData, {headers: {
        'Access-Control-Allow-Origin': '*',
      }});
    return response.status === 200 ? response.data : console.log(response)
}
const checkUser = () => {
    
}