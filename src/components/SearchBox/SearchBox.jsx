import React, { useState, useEffect, useRef } from "react";
import { fetchUsersData, fetchRepositoriesData } from "../../redux/index";
import { useDispatch } from "react-redux";
import { useHistory, useParams, Link } from "react-router-dom";

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
	const history = useHistory();
	const { searchTypeParam, searchParam } = useParams();
	const searchInput = useRef();
	const searchTypeInput = useRef();
	let timeout = null;

	useEffect(() => {
		searchInput.current.value = searchParam || "";
		searchTypeInput.current.value = searchTypeParam || "users";

		// When unmount stop submitting extra requests
		return () => clearTimeout(timeout);

		// eslint-disable-next-line
	}, []);

	const handleChange = () => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			handleSubmit();
		}, 500);
	};

	const handleSubmit = () => {
		const { value: q } = searchInput.current;
		const { value: searchType } = searchTypeInput.current;

		// Validate
		setErrorMessage("");
		if (q.length === 0) return history.push("/");
		if (q.length > 0 && q.length < 3) return setErrorMessage("Please enter 3 characters or more.");

		if (searchType === "users") dispatch(fetchUsersData(q));
		if (searchType === "repositories") dispatch(fetchRepositoriesData(q));

		history.push(`/search/${searchType}/${q}`);
	};

	return (
		<div className="search-box">
			<div>
				<Link to="/">
					<img src={GitHubLogo} alt="Logo" />
				</Link>
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
					onKeyUp={handleChange}
					error={errorMessage}
					ref={searchInput}
					autoFocus
				/>
				<Select
					name="searchType"
					onChange={handleChange}
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
