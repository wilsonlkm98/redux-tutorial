import loginReducer from "./login/loginReducer";
import { createStore } from "redux";

const store = createStore(loginReducer);
export default store;