import React from "react";
import swal from "sweetalert";
import axios from "../../../API/axios";

export const getUsers = () => {
    return new Promise((resolve, reject) => {
        let data = axios.get("users")
        return resolve(data)
    })
}
export const activateUser = async (user) => {
    await axios.post("user/activate", {userId: user})
    swal("Sikeresen aktiválva!")
}
export const deleteUser = async (user) => {
    await axios.post("user/delete", {userId: user})
    swal("Sikeresen törölve!")
}
export const deactivateUser = async (user) => {
    await axios.post("user/deactivate", {userId: user})
    swal("Sikeresen deaktiválva!")
}
export const adminRoleToUser = async (user) => {
    await axios.post("user/admin/activate", {userId: user})
    swal("Admin jog sikeresen hozzáadva!")
}
export const adminRoleFromUser = async (user) => {
    await axios.post("user/admin/deactivate", {userId: user})
    swal("Admin jog sikeresen hozzáadva!")
}