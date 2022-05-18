import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { activateUser, adminRoleFromUser, adminRoleToUser, deactivateUser, deleteUser, getUsers } from "../Controller/ManageUsersController";

const ManageUsers = (props) => {
  const [users, setUsers] = useState([]);
  const [refresh, setRefresh] = useState([])
  useEffect(() => {
    getUsers().then((data) => setUsers(data.data));
  }, []);
  console.log(users);
  return (
    <>
      {props.children}
      <Container fluid>
        <h1 style={{color: "white", paddingBottom: "20px"}}>Felhasználók kezelése</h1>
        <Table style={{color: "white"}}>
          <thead>
            <tr>
              <th>Név</th>
              <th>Aktiválva</th>
              <th>Admin</th>
              <th>Email</th>
              <th>Műveletek</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                  <td>{user.username}</td>
                  <td>{user.verified === 1 ? "Igen" : "Nem"}</td>
                  <td>{user.isAdmin === 1 ? "Igen" : "Nem"}</td>
                  <td>{user.email}</td>
                  <td>
                      <Button variant="danger" onClick={() => deleteUser(user.id)}>Törlés</Button>
                      <Button className="m-2" variant={user.verified === 0 ? "success" : "warning"} onClick={user.verified === 0 ? () => activateUser(user.id) : () => deactivateUser(user.id)}>{user.verified === 0 ? "Aktiválás": "Deaktiválás"}</Button>
                      <Button variant={user.isAdmin === 0 ? "info" : "warning" } onClick={user.isAdmin === 0 ? () => adminRoleToUser(user.id) : () => adminRoleFromUser(user.id)}> {user.isAdmin === 0 ? "Admin jog adás" : "Admin jog elvétel"}</Button>
                  </td>
              </tr>
              
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};
export default ManageUsers;
