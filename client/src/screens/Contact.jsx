import React from 'react'
import { Container, Row, Col, Table, Image } from 'react-bootstrap'
import { FiPhoneCall } from 'react-icons/fi'
import { ImMobile } from 'react-icons/im'
import { AiOutlineMail } from 'react-icons/ai'

const Contact = () => {
    return (
        <>
            <Container style={{ marginTop: '50px' }}>
                <Row>
                    <Col md={6}>
                        <h1>Pizza Contact</h1>
                        <p>Vui lòng liên hệ với chúng tối qua các hình thức liên lạc bên dưới nhé</p>

                        <Table striped bordered hover className="text-center">
                            <thead>
                                <tr>
                                    <th className='bg-warning text-center' colSpan={3}>------ Contact Details ------</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><FiPhoneCall /></td>
                                    <td>Phone</td>
                                    <td>0924517375</td>
                                </tr>
                                <tr>
                                    <td><ImMobile /></td>
                                    <td>Call</td>
                                    <td>0924517375</td>
                                </tr>
                                <tr>
                                    <td><AiOutlineMail /></td>
                                    <td>Email</td>
                                    <td>dinhtrithuc2001@gmail.com</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col md={6}>
                        <Image src='images/farmhouse.jpg' style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 10}}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Contact