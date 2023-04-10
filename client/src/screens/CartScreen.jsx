import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { FaMinusCircle, FaPlusCircle, FaTrash } from 'react-icons/fa'
import { Card } from 'react-bootstrap';
import { editQuantityItem, deleteFromCart } from '../redux/actions/cartAction'
import Checkout from '../components/Checkout';

const CartScreen = () => {
    const { cartItems } = useSelector(state => state.cartReducer)
    const dispatch = useDispatch();
    const subTotal = cartItems.reduce((x, item) => x + item.price, 0)
    return (
        <>
            <Container>
                <Row>
                    <Col md={6}>
                        <h2 className='my-4'>Giỏ Hàng</h2>
                        {
                            cartItems.map(item => (
                                <Card className='mb-2'>
                                    <div className='d-flex justify-content-between px-4 py-2 '>
                                        <div>
                                            <h5>Tên: {item.name}</h5>
                                            <h6>Loại: {item.size}</h6>
                                            <h6>
                                                Số lượng: &nbsp;
                                                <FaMinusCircle onClick={() => dispatch(editQuantityItem(item, -1))} className='text-danger' style={{ cursor: 'pointer' }} /> &nbsp;
                                                {item.quantity}&nbsp;
                                                <FaPlusCircle onClick={() => dispatch(editQuantityItem(item, 1))} className='text-success' style={{ cursor: 'pointer' }} />
                                            </h6>
                                            <h6>Giá tiền: {item.quantity} x {(item.prices[0][item.size]).toLocaleString()} = {" "} {item.price.toLocaleString() + ' vnd'}</h6>
                                        </div>
                                        <div>
                                            <img src={item.image} alt={item.image} style={{ width: '90px', height: '90px' }} />
                                            <FaTrash onClick={() => dispatch(deleteFromCart(item))} className='text-danger ms-3 fs-5' style={{ cursor: 'pointer' }} />
                                        </div>
                                    </div>
                                </Card>
                            ))
                        }

                    </Col>
                    <Col md={6}>
                        <h2 className='my-4 text-center'>Thông tin thanh toán</h2>
                        <div className='text-center'>
                            <h5>Tổng tiền: {subTotal.toLocaleString()} vnd</h5>
                            <Checkout subTotal={subTotal}/>
                        </div>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default CartScreen