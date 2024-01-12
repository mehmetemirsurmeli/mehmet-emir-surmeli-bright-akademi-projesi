import React from 'react'
import { Container, Nav, Navbar, NavbarToggle } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <div className='headertop'>
                <Navbar expand="lg" className='header-body'>
                    <Container>
                        <Navbar.Brand className='text-white fw-bold nav-link' href='/'>Bright Akademi</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav>
                                <NavLink className='text-white ps-5 NavLink nav-link' to="/">Ana Sayfa</NavLink>
                                <NavLink className='text-white ps-5 NavLink nav-link'>Eğitimler</NavLink>
                                <NavLink className='text-white ps-5 NavLink nav-link' to="/egitimdetay">Eğitim Detay</NavLink>
                                <NavLink className='text-white ps-5 NavLink nav-link' to="/egitmenler">Eğitimenler</NavLink>
                                <NavLink className='text-white ps-5 NavLink nav-link' to="/egitmendetay">Eğitmen Detay</NavLink>
                                <NavLink className='text-white ps-5 NavLink nav-link' to="/hakkımızda">Hakkımızda</NavLink>
                                <NavLink className='text-white ps-5 NavLink nav-link' to="/contact">Contact</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar >
            </div >
        </>
    )
}

export default Header;