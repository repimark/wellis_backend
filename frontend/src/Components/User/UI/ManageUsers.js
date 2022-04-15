import React from "react";
import { Container } from "react-bootstrap";

const ManageUsers = (props) => {
    return (
        <>
        {props.children}
        <Container>
            <h1>Felhasználók kezelése</h1>
        </Container>
        </>
    )
}
export default ManageUsers;