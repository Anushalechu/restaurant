import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
   <>
   <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          
          <Navbar.Brand href="#home"><Link to={'/'} style={{textDecoration:"none",color:"white"}}>FOOD CIRCLE</Link></Navbar.Brand>
          
        </Container>
      </Navbar>

   </>
  )
}

export default Header