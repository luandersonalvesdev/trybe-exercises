import { combineReducers } from "redux";
import { changeColorReducer } from './changeColor.reducer';
import { changeNumberReducer } from './changeNumber.reducer';

const rootReducer = combineReducers({
  changeColorReducer,
  changeNumberReducer,
})

export default rootReducer;