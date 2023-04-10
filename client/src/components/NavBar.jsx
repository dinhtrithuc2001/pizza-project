import React from 'react'
import { Navbar, Nav, Container, Image, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useHistory } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const NavBar = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const cartState = useSelector((state) => state.cartReducer)
    const { currentUser } = useSelector((state) => state.loginUserReducer)

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand >
                        <Image src='images/logo.png' alt='logo' style={{ height: 50, cursor: "pointer" }} onClick={() => history.push('/')} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            {
                                currentUser ? <>
                                    <Dropdown className='rounded me-3'>
                                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                            {currentUser.name}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu variant="dark">
                                            <LinkContainer to="/orders">
                                                <Dropdown.Item >Order</Dropdown.Item>
                                            </LinkContainer>
                                            <Dropdown.Item onClick={() => dispatch({ type: 'REMOVE_ACCOUNT', payload: null })}>Logout</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </> : <>
                                    <LinkContainer to="/login">
                                        <Nav.Link className='border-2 border border-success rounded me-3'>Đăng nhập</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/register">
                                        <Nav.Link className='border-2 border border-warning rounded me-3'>Đăng ký</Nav.Link>
                                    </LinkContainer>
                                </>
                            }

                            <LinkContainer to="/cart">
                                <Nav.Link>
                                    <AiOutlineShoppingCart style={{ fontSize: 30 }} />
                                    ({cartState.cartItems.length})</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar