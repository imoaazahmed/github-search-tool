import { combineReducers } from "redux";

// App Reducers
import searchReducer from "./search/reducer";

export default combineReducers({
	search: searchReducer,
});
