import React from "react";
import { useSelector } from "react-redux";

// Components
import SearchBox from "../SearchBox/SearchBox";

// CSS
import "./SearchPage.css";

function SearchPage(props) {
	const usersData = useSelector((state) => state.search.usersData);
	const repositoriesData = useSelector((state) => state.search.repositoriesData);

	return (
		<div className="page-container">
			<div className="search-page-wrapper">
				<SearchBox />
				<div className="search-results-container"></div>
			</div>
		</div>
	);
}

export default SearchPage;
