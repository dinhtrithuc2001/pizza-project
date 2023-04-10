import Swal from 'sweetalert2'

export const addToCart = (pizza, quantity, size) => (dispatch, getState) => {
    let cartItem = {
        name: pizza.name,
        _id: pizza._id,
        image: pizza.image,
        size,
        quantity,
        prices: pizza.prices,
        price: pizza.prices[0][size] * quantity,
    }
    dispatch({
        type: "ADD_TO_CART",
        payload: cartItem
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems))
}

export const editQuantityItem = (pizza, num) => (dispatch, getState) => {
    if((num < 0 && pizza.quantity == 1) || (num > 0 && pizza.quantity == 99)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Số lượng vượt quá mức cho phép!',
          })
    }
    else {
        if(num < 0){
            --pizza.quantity
        }
        else {
            ++pizza.quantity
        }
        
        pizza.price = pizza.prices[0][pizza.size] * pizza.quantity

        dispatch({
            type: "EDIT_QUANTITY",
            payload: pizza
        })
        localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems))
    }
}
export const deleteFromCart = (pizza) => (dispatch, getState) => {
        dispatch({
            type: 'DELETE_FROM_CART',
            payload: pizza  
        })
        localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems))
    
}