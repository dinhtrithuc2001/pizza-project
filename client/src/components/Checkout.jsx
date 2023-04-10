import React, { useEffect, useState } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { placeOrder } from '../redux/actions/orderAction'

const Checkout = ({ subTotal }) => {
    const { currentUser } = useSelector((state) => state.loginUserReducer)
    const { cartItems } = useSelector((state) => state.cartReducer)
    const [state, setState] = useState(true)

    const dispatch = useDispatch()

    const tokenHandler = (token) => {
        dispatch(placeOrder(token, subTotal));
        console.log(token);
    };

    useEffect(() => {
        if(cartItems.length > 0) {
            setState(false)
        }else{
            setState(true)
        }
    }, [cartItems])
  
    return (
        <div className='mt-5'>
            {   currentUser ? <StripeCheckout
                    amount={subTotal}
                    shippingAddress
                    token={tokenHandler}
                    stripeKey="pk_test_51MuKOSB8SYXzUpNhCwfnRefkq1RM7qJdsszMzsrintKjQgIMHxle4qvmXmcnovVnB9Jygnnjg3HXOtyR2X76RTX800WAeIIb5C"
                    currency="VND"
                >
                    <Button className={`px-5 py-3 ${state ? 'd-none' : ' '}`}>Pay Now</Button>
                </StripeCheckout> : <p className='text-danger'>Vui lòng đăng nhập để thanh toán</p> 
            }
        </div>
    )
}

export default Checkout