import { combineReducers } from "redux"

// Front
import Weather from "./weather/reducer"


const rootReducer = combineReducers({
    Weather,
})

export default rootReducer
