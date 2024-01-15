import React from 'react'
import { Container, Nav, Navbar, NavbarToggle, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../Pages/Image/logo.png'

const Header = () => {
    return (
        <>
            <div className='container-fluid'>
                <Navbar expand="lg" className='header-body p-3' data-bs-theme="dark">
                    <Container className=''>
                        <NavLink to="/"><img src={logo} /></NavLink>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className='justify-content-around m-auto w-100'>
                                <NavLink className='ps-4 NavLink nav-link title fw-semibold' to="/">Ana Sayfa</NavLink>
                                <NavDropdown title="Eğitimler" className='text-white ps-4 title fw-semibold' id="basic-nav-dropdown">
                                    <NavLink className='text-white ps-4 nav-link title fw-semibold' to="/fullstackegitim">
                                        Full Stack Programlama Eğitimi
                                    </NavLink>
                                    <NavLink className='text-white ps-4 nav-link title fw-semibold' to="/networkegitim">Network, Sistem ve Siber Güvenlik Uzmanlık Eğitimi</NavLink>
                                    <NavLink className='text-white ps-4 nav-link title fw-semibold' to="/bulutbilisimegitim">Bulut Bilişim Uzmanlık Eğitimi</NavLink>
                                    <NavLink className='text-white ps-4 nav-link title fw-semibold' to="/fulldataegitim">Full Data Uzmanlık Eğitimi</NavLink>

                                </NavDropdown>

                                <NavLink className='ps-4 NavLink nav-link title fw-semibold' to="/egitmenler">Eğitmenler</NavLink>
                                <NavLink className='ps-4 NavLink nav-link title fw-semibold' to="/egitmendetay">Eğitmen Detay</NavLink>
                                <NavLink className='ps-4 NavLink nav-link title fw-semibold' to="/hakkimizda">Hakkımızda</NavLink>
                                <NavLink className='ps-4 NavLink nav-link title fw-semibold' to="/contact">Contact</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar >
            </div >
        </>
    )
}

export default Header;