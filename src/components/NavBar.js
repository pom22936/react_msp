import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {

    render() {
        return (
            <Navbar bg="primary" variant="dark" expand="lg">
                <Navbar.Brand href="/">ITSM</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                        <NavLink className="nav-link" exact={true} activeClassName="active" to="/">
                            <FontAwesomeIcon icon={faHome} size='1x' style={{ color: 'white' }} /> Home
                        </NavLink>

                        <NavLink className="nav-link" activeClassName="active" to="/incident">
                            incident
                        </NavLink>

                        <NavLink className="nav-link" activeClassName="active" to="/">
                            mockup
                        </NavLink>

                        <NavLink className="nav-link" activeClassName="active" to="/">
                            mockup
                        </NavLink>

                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/">Action</NavDropdown.Item>
                            <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="/">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }

}


export default NavBar;
