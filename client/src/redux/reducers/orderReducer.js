export const placeOrderReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case 'PLACE_ORDER_REQUEST': {
            return { ...state, loading: true }
        }
        case 'PLACE_ORDER_SUCCESS': {
            return { ...state, loading: false, success: true }
        }
        case 'PLACE_ORDER_FAIL': {
            return { ...state, loading: false, error: payload }
        }
        default: return state
    }
}

export const getUserOrdersReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case "USER_ORDER_REQUEST":
            return {
                loading: true,
                ...state,
            };
        case "USER_ORDER_SUCCESS":
            return {
                loading: false,
                success: true,
                orders: action.payload,
            };
        case "USER_ORDER_FAIL":
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};