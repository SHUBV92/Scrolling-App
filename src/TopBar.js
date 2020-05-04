import React from "react"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"
import "./Topbar.css"
import { withRouter } from "react-router-dom"

function TopBar ({ location }) { 
    const { pathname } = location; 

    return ( 
        <Navbar bg="primary" expand="lg" variant="dark"> 
        <Navbar.Brand href="#home">Scrolling App</Navbar.Brand>
        </Navbar>
    )
}