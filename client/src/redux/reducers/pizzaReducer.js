export const getAllPizzaReducer = (state = {pizzas: []}, {type, payload}) => {
        
    switch(type) {
        case 'GET_PIZZAS_REQUEST' :  return {...state, loading: true}
        case 'GET_PIZZAS_SUCCESS': 
            return {
                pizzas: payload,
                loading: false
            }
        case 'GET_PIZZAS_FAIL': 
            return {
                error: payload,
                loading: false
            }
        default: return {...state}
    }
}