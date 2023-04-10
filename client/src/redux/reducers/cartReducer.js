import Swal from 'sweetalert2'
export const cartReducer = (state = { cartItems: [] }, { type, payload }) => {
    switch (type) {
        case 'ADD_TO_CART': {
            let pizzaExist = state.cartItems.find(item => (item._id == payload._id && item.size == payload.size))

            if (pizzaExist) {
                Swal.fire({
                    icon: 'success',
                    title: 'Đã cập nhật số lượng',
                })
                pizzaExist.quantity += payload.quantity
                return { ...state }
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Đã thêm vào giỏ',
                })
                return {
                    ...state,
                    cartItems: [...state.cartItems, payload]
                }
            }
        }
        
        case 'EDIT_QUANTITY' : {
            let pizzaExist = state.cartItems.find(item => (item._id == payload._id && item.size == payload.size))
            if (pizzaExist) {
                pizzaExist = {...payload}
                return { ...state }
            }
        }

        case 'DELETE_FROM_CART': {
            let cartItems = [...state.cartItems]

            let index = cartItems.findIndex((item) => item._id == payload._id && item.size == payload.size)

            if(index !== -1){
                cartItems.splice(index, 1)
            }

            return {...state,cartItems}
        }
        default: return { ...state }
    }
}