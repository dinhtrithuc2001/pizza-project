import React, {useState, useEffect} from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { loginUser } from '../redux/actions/userAction'
import { kiemTraDinhDang, kiemTraDoDai, kiemTraRong } from '../utils/validation';
import Swal from 'sweetalert2'

const Login = () => {

    const [state, setState] = useState({
        nguoiDung: {
            email: '',
            password: '',
        },
        err: {
            email: '',
            password: '',
        },
        isValid: true
    })

    const dispatch = useDispatch()

    useEffect(() => {
        if(localStorage.getItem('currentUser')){
            window.location.href('/')
        }
    }, [])

    const handleChange = (e) => {
        let { name, title, value } = e.target
        let { nguoiDung, err, isValid } = { ...state }

        isValid = true

        if (name == 'password') {
            isValid &= kiemTraRong(value, err, name, title) 
        }
        if (name == 'email') {
            isValid &= kiemTraRong(value, err, name, title) && kiemTraDinhDang(value, err, name, title, /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, 'không hợp lệ')
        }

        nguoiDung[name] = value

        setState({ ...state, nguoiDung, err, isValid })
    }

    const onSubmitLogin = (e) => {
        e.preventDefault()
        let {email, password} = state.nguoiDung
        if(email !== '' && password !== '' && state.isValid == true){
            dispatch(loginUser({email, password}))
        }else {
            Swal.fire({
                icon: 'info',
                title: 'Vui lòng điền đủ thông tin',
              })
        }
    }

    
    return (
        <Container>
            <Form style={{width: '50%'}} className='mx-auto border border-2 p-3 mt-5 rounded border-warning' onSubmit={onSubmitLogin}>
                <h2 className='my-4 text-center'>Đăng Nhập</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        title='Email'
                        name='email'
                        placeholder="Enter email"
                        onChange={handleChange}
                    />
                     <p className='text-danger'>{state.err.email}</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        title="Password"
                        type="password"
                        name='password'
                        placeholder="Enter Password"
                        onChange={handleChange}
                    />
                     <p className='text-danger'>{state.err.password}</p>
                </Form.Group>

                <Button style={{position: 'relative', left: '50%', transform: 'translateX(-50%)'}} className='px-5' variant="warning" type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    )
}

export default Login