import React from "react";

// Components
import SearchBox from "../SearchBox/SearchBox";

// CSS
import "./LandingPage.css";

const LandingPage: React.FC = () => {
	return (
		<div className="page-container">
			<div className="landing-page-wrapper">
				<SearchBox />
			</div>
		</div>
	);
};

export default LandingPage;
