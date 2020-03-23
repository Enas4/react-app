import {combineReducers} from "redux";
import mainReducer from "/home/enas/redux-todo/src/Reducers/mainReducer.js";
import Input from "/home/enas/redux-todo/src/Reducers/FormReducer.js";

const rootReducer = combineReducers({
    main:mainReducer,
    input:Input
}
    )

export default rootReducer; 

