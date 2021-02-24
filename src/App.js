import { Switch, Route, Redirect } from "react-router-dom";

// Views
import LandingPage from "./components/LandingPage/LandingPage";
import SearchPage from "./components/SearchPage/SearchPage";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/" component={LandingPage} exact />
				<Route path="/search/:searchTypeParam?/:searchParam?" component={SearchPage} />
				<Redirect to="/" />
			</Switch>
		</div>
	);
}

export default App;
