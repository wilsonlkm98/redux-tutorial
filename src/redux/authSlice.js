// // authSlice.js

// import { createSlice } from '@reduxjs/toolkit';
// import authApi from './authApi';

// const initialState = {
//   isAuthenticated: false,
//   error: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     loginSuccess(state) {
//       state.isAuthenticated = true;
//       state.error = null;
//     },
//     loginFailure(state, action) {
//       state.isAuthenticated = false;
//       state.error = action.payload;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//       state.error = null;
//     },
//   },
// });

// export const { loginSuccess, loginFailure, logout } = authSlice.actions;

// export const login = (username, password) => async (dispatch) => {
//   try {
//     const response = await authApi.login(username, password);
//     if (response.success) {
//       dispatch(loginSuccess());
//     } else {
//       dispatch(loginFailure(response.error));
//     }
//   } catch (error) {
//     dispatch(loginFailure(error.message));
//   }
// };

// export default authSlice.reducer;