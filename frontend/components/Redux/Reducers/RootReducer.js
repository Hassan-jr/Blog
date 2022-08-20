import { combineReducers } from "redux"
import Main from "./Main.js"

const RootReducer = combineReducers({
  Main : Main,
})

export default RootReducer;