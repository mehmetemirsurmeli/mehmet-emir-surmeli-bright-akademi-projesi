import React from 'react'
import { Container, Nav, NavDropdown, NavLink, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <div className='container'>
                <Navbar bg="primary" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Ana Sayfa</Nav.Link>
                            <Nav.Link href="/">İletişim</Nav.Link>
                            <Nav.Link href="/">Hakkımızda</Nav.Link>
                            <Nav.Link href="/">Eğitimler</Nav.Link>
                            <Nav.Link href="/">Eğitim Detay</Nav.Link>
                            <Nav.Link href="/">Eğitmenler</Nav.Link>
                            <Nav.Link href="/">Eğitmen Detay</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default Header;