import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BiSolidVideos } from "react-icons/bi";

function Header() {
  return (
    <div> <Navbar className="bg-dark">
    <Container>
      <Navbar.Brand href="#home" className='text-white fs-1'>
      <BiSolidVideos className='me-3'/>
       MEDIA PLAYER
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header