
export const registerUserReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case 'USER_REGISTER_REQUEST': 
        {
            return {loading: true}
        }
        case 'USER_REGISTER_SUCCESS':{
            return {loading: false, success: true}
        }
        case 'USER_REGISTER_FAIL':
            return {loading: false, error: payload}
        default: return {...state}
    }
}

export const loginUserReducer = (state = {}, {type, payload}) => {
    switch(type){
        case 'USER_LOGIN_REQUEST':{
            return {loading: true}
        }
        case 'USER_LOGIN_SUCCESS': {
            return {
                loading: false,
                success: true,
                currentUser: payload
            }
        }
        case 'USER_LOGIN_FAIL': {
            return {
                loading: false,
                error: payload
            }
        }
        case 'REMOVE_ACCOUNT': {
            localStorage.removeItem('currentUser')
            return {...state, currentUser: payload}
        }
        default: return{...state}
    }
}
