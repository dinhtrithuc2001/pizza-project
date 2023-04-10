import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {MdLocalOffer} from 'react-icons/md'

const TopBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid>
                    <h6 className='text-light'>
                        <MdLocalOffer className='text-warning' /> &nbsp;&nbsp;Pizza Company - Giao hàng tận nhà miễn phí</h6>
                    <Nav className='ms-auto'>
                        <LinkContainer to="/" className='me-5'>
                            <Nav.Link className='navbar-light'>Trang chủ</Nav.Link>
                        </LinkContainer>
                        <LinkContainer  to="/about" className='me-5 text-light'>
                            <Nav.Link>Thông Tin</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact" className='me-5 text-light'>
                            <Nav.Link>Liên hệ</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/policy" className='me-5 text-light'>
                            <Nav.Link>Điều khoản</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default TopBar