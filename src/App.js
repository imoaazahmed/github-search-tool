import { Switch, Route, Redirect } from "react-router-dom";

// Views
import SearchPage from "./components/SearchPage/SearchPage";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/search" component={SearchPage} />
				<Redirect to="/search" />
			</Switch>
		</div>
	);
}

export default App;
