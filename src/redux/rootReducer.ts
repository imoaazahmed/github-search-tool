import { combineReducers } from "redux";

// App Reducers
import searchReducer from "./search/reducer";

const rootReducer = combineReducers({
	search: searchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
