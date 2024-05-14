import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import {NavLink, Outlet} from "react-router-dom";

export default function NavigationBar() {


    return (
        <Navbar bg="light" variant="light">
            <Container>

                <Nav className="me-auto">
                    <Nav.Link
                        as={NavLink}
                        to="/"
                        style={({isActive}) => ({
                            textDecoration: isActive && "underline",
                        })}
                    >
                        Home
                    </Nav.Link>
                    <br/>
                    <Nav.Link
                        as={NavLink}
                        to="competitions"
                        style={({isActive}) => ({
                            textDecoration: isActive && "underline",
                        })}
                    >
                        competitions
                    </Nav.Link> <br/>
                    <Outlet />
                </Nav>
            </Container>
        </Navbar>

    )
}