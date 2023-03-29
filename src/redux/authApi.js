import { loginRequest, loginSuccess, loginFailure } from "./login/loginActions";
import { useDispatch } from "react-redux";

const login = async (username, password) => {
    if (username === 'admin' && password === 'admin') {
        return { success: true };
    } 
    else {
        return { success: false, error: 'Invalid username or password' };
    }
};

// const login = (username, password) => {

//     return async (dispatch) => {
//         dispatch(loginRequest());
//         try {
//             if (username === 'admin' && password === 'admin') {
//                 dispatch(loginSuccess(username));
//             }
//         }
//         catch (error) {
//             dispatch(loginFailure(error))
//         }
//     }
// };

export default {
    login,
};