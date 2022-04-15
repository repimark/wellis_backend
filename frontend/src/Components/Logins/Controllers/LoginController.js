import React from "react";
import axios from "axios";
import swal from "sweetalert";

export const LoginController = async (username, password) => {
    let userData = {
        username: username, 
        password: password
    }
    //axios.defaults.withCredentials = true
    let response = await axios.post("http://localhost:2233/login", userData);
    return response.status === 200 ? response.data : console.log(response)
}
const checkUser = () => {
    
}