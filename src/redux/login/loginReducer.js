import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./loginTypes";

const initialState = {
    loading: false,
    success: false,
    user: '',
    token: '',
    error: ''
};

const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_REQUEST: return {
            ...state,
            loading: true
        };

        case LOGIN_SUCCESS: return {
            ...state,
            loading: false,
            success: true,
            user: action.payload,
            token: 'testingtoken123',
            error: ''
        };

        case LOGIN_FAILURE: return {
            ...state,
            loading: false,
            error: action.payload
        };
    };
};

export default loginReducer;