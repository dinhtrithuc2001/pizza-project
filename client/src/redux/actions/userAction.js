import axios from 'axios'
import Swal from 'sweetalert2'

export const registerUser = (user) => async dispatch => {
    dispatch({ type: 'USER_REGISTER_REQUEST' })
    try {
        const res = await axios.post('/api/users/register', user)
        if (res.data.success) {
            dispatch({ type: 'USER_REGISTER_SUCCESS' })
            Swal.fire({
                icon: 'success',
                title: res.data.message,
            })
            window.location.href = "/login"
        } else {
            Swal.fire({
                icon: 'error',
                title: res.data.message,
            })
        }

    } catch (error) {
        dispatch({ type: 'USER_REGISTER_FAIL', payload: error })
    }
}

export const loginUser = (user) => async dispatch => {
    dispatch({ type: "USER_LOGIN_REQUEST" })
    try {
        const res = await axios.post('/api/users/login', user)
        if (res.status == 200 && res.data.success == true) {
            dispatch({ type: 'USER_LOGIN_SUCCESS', payload: res.data.currentUser })
            localStorage.setItem('currentUser', JSON.stringify(res.data.currentUser))
            Swal.fire({
                icon: 'success',
                title: res.data.message,
            })
            window.location.href = "/"
        } else {
            Swal.fire({
                icon: 'error',
                title: res.data.message,
            })
        }

    } catch (error) {
        dispatch({ type: 'USER_LOGIN_FAIL', payload: error })
        Swal.fire({
            icon: 'error',
            title: 'Login fail',
        })
    }
}
