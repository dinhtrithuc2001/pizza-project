import React, { useState, useEffect } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from '../redux/actions/userAction';
import { kiemTraDinhDang, kiemTraDoDai, kiemTraRong } from '../utils/validation';
import Swal from 'sweetalert2'

const Register = () => {
    const dispatch = useDispatch()
    const [state, setState] = useState({
        nguoiDung: {
            name: '',
            email: '',
            password: '',
        },
        err: {
            name: '',
            email: '',
            password: '',
        },
        isValid: true
    })
    const HandleChangeInput = (e) => {
        let { name, title, value } = e.target
        let { nguoiDung, err, isValid } = { ...state }

        isValid = true

        if (name == 'name') {
            isValid &= kiemTraRong(value, err, name, title) && kiemTraDinhDang(value, err, name, title, "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
                "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
                "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$", 'không được có số và ký tự đặc biệt')
        }
        if (name == 'password') {
            isValid &= kiemTraRong(value, err, name, title) && kiemTraDoDai(value, err, name, title, 6, 50) && kiemTraDinhDang(value, err, name, title, /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/, 'phải có chữ thường, chữ hoa, số và ký tự đặc biệt')
        }
        if (name == 'email') {
            isValid &= kiemTraRong(value, err, name, title) && kiemTraDinhDang(value, err, name, title, /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, 'không hợp lệ')
        }

        nguoiDung[name] = value

        setState({ ...state, nguoiDung, err, isValid })
    }

    const onSubmitRegister = (e) => {
        e.preventDefault()
        let { name, email, password } = state.nguoiDung
        if (name == '' || email == '' || password == '' || !state.isValid) {
            Swal.fire({
                icon: 'info',
                title: 'Vui lòng điền đủ thông tin',
              })
        }
        else {
            const user = { name, email, password }
            dispatch(registerUser(user))
        }
    }

    return (
        <Container>
            <Form style={{width: '50%'}} className='mx-auto border border-2 p-3 mt-5 rounded border-primary' onSubmit={onSubmitRegister}>
                <h2 className='my-4 text-center'>Đăng Ký</h2>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        title='Họ Tên'
                        name='name'
                        type="text"
                        placeholder="Enter name"
                        onChange={HandleChangeInput}
                    />
                    <p className='text-danger'>{state.err.name}</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        title='Email'
                        name='email'
                        type="email"
                        placeholder="Enter email"

                        onChange={HandleChangeInput}
                    />
                    <p className='text-danger'>{state.err.email}</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        title='Password'
                        name='password'
                        type="password"
                        placeholder="Password"

                        onChange={HandleChangeInput}
                    />
                    <p className='text-danger'>{state.err.password}</p>
                </Form.Group>
                <Button style={{position: 'relative', left: '50%', transform: 'translateX(-50%)'}} className='px-5' variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </Container>
    )
}

export default Register