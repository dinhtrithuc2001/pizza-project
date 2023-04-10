import React, { useState } from 'react'
import { Card, Button, Row, Col, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions/cartAction'

const Pizza = ({ pizza }) => {
    const [sizes, setSize] = useState('small')
    const [quantity, setQuantity] = useState(1)

    // Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()
   

    const calcQuantity = (num) => {
        let result = quantity + num
        if (result <= 1 || result >= 100) {
            setQuantity(1)
        }
        else {
            setQuantity(result)
        }
    }

    return (
        <>
            <Card style={{ marginTop: 10 }}>
                <Card.Img
                    variant="top"
                    src={pizza.image}
                    height={"220px"}
                    onClick={handleShow}
                    style={{ cursor: 'pointer' }}
                />
                <Card.Body>
                    <Card.Title className='text-center mb-2'>{pizza.name}</Card.Title>
                    <hr />
                    <Card.Text>
                        <Row>
                            <Col md={6}>
                                <h6>Loại: </h6>
                                <select style={{ width: "100%", height: 37 }} value={sizes} onChange={e => setSize(e.target.value)}>
                                    {pizza.sizes.map((size, index) => <option>
                                        {size}
                                    </option>)}
                                </select>
                            </Col>
                            <Col md={6}>
                                <h6>Số lượng: </h6>
                                <Button className='btn-warning' onClick={() => { calcQuantity(-1) }}>-</Button>
                                <span className='px-2'>{quantity}</span>
                                <Button className='btn-success' onClick={() => { calcQuantity(1) }}>+</Button>
                            </Col>
                        </Row>
                    </Card.Text>
                    <Row style={{ marginBottom: "1rem" }}>
                        <Col>Giá: {(pizza.prices[0][sizes] * quantity).toLocaleString()+' VND'}</Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button onClick={() => dispatch(addToCart(pizza, quantity, sizes))}>Thêm vào giỏ</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            {/* modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Card.Img
                            variant="top"
                            src={pizza.image}
                            height={"220px"}
                        /> 
                    </div>
                    <div style={{marginTop: 10}}>
                        <h5>Description</h5>
                        <p>{pizza.description}</p>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Pizza