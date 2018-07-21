import {
	createStore
} from "redux";
import reducer from "./reducer";

const initialState = {
	score: 0,
	questions: []
}

const store = createStore(reducer, initialState)
export default store;