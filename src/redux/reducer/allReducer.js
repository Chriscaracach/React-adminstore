import Reducer1 from "./reducer";
import { combineReducers } from "redux";

//Aquí se combinan los reducers de Redux

const allReducer = combineReducers({
  Reducer1: Reducer1,
  //Otros reducers para combinar
});

export default allReducer;
