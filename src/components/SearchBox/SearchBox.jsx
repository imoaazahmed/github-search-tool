import React, { useState, useRef } from "react";
import { fetchUsersData, fetchRepositoriesData } from "../../redux/index";
import { useDispatch } from "react-redux";

// Components
import Input from "../common/Input/Input";
import Select from "../common/Select/Select";

// Images
import GitHubLogo from "../../img/github.svg";

// CSS
import "./SearchBox.css";

function SearchBox(props) {
	const [errorMessage, setErrorMessage] = useState("");
	const dispatch = useDispatch();
	const searchInput = useRef();
	const searchTypeInput = useRef();
	let timeout = null;

	const handleChange = () => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			handleSubmit();
		}, 1000);
	};

	const handleSubmit = () => {
		const { value: q } = searchInput.current;
		const { value: searchType } = searchTypeInput.current;

		// Validate
		setErrorMessage("");
		if (q.length === 0) return;
		if (q.length > 0 && q.length < 3) {
			return setErrorMessage("Please enter 3 characters or more.");
		}

		if (searchType === "users") {
			dispatch(fetchUsersData(`?q=${q}`));
		}

		if (searchType === "repositories") {
			dispatch(fetchRepositoriesData(`?q=${q}`));
		}
	};

	return (
		<div className="search-box">
			<div>
				<img src={GitHubLogo} alt="Logo" />
				<div>
					<h3>GitHub Searcher</h3>
					<p>Search users or repositories below</p>
				</div>
			</div>

			<div>
				<Input
					type="text"
					name="search"
					placeholder="Start typing to search .."
					onChange={handleChange}
					error={errorMessage}
					ref={searchInput}
					autoFocus
				/>
				<Select
					name="searchType"
					onChange={handleChange}
					defaultValue="users"
					ref={searchTypeInput}
					options={[
						{ name: "Users", value: "users" },
						{ name: "Repositories", value: "repositories" },
					]}
				/>
			</div>
		</div>
	);
}

export default SearchBox;
