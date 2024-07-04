import axios from 'axios';
import Swal from 'sweetalert2'

export const placeOrder = (token, subTotal) => async (dispatch, getState) => {
    dispatch({
        type: 'PLACE_ORDER_REQUEST',
    })
    const currentUser = getState().loginUserReducer.currentUser
    const cartItems = getState().cartReducer.cartItems
    try {
        const res = await axios.post('api/orders/placeorder', { token, subTotal, currentUser, cartItems })
        dispatch({
            type: 'PLACE_ORDER_SUCCESS'
        })
        Swal.fire({
            icon: 'success',
            title: 'Thanh toán thành công',
        })
        window.location.href = "/"
    } catch (error) {
        dispatch({
            type: 'PLACE_ORDER_FAIL'
        })
    }
}

export const getUserOrders = () => async (dispatch, getState) => {
    const currentUser = getState().loginUserReducer.currentUser;
    console.log('currentUser', currentUser)
    dispatch({
      type: "USER_ORDER_REQUEST",
    });
    try {
      const response = await axios.post("/api/orders/getuserorder", {
        userid: currentUser._id,
      });
      // console.log(response);
      dispatch({ type: "USER_ORDER_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "USER_ORDER_FAIL", payload: error });
    }
  };

  
