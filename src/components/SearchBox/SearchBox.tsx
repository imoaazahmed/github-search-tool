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

const SearchBox: React.FC = () => {
	const [errorMessage, setErrorMessage] = useState<string>("");
	const dispatch = useDispatch();
	const history = useHistory();
	const { searchTypeParam, searchParam } = useParams<{ searchTypeParam?: string; searchParam?: string }>();
	const searchInput = useRef<HTMLInputElement>(null);
	const searchTypeInput = useRef<HTMLSelectElement>(null);
	let timeout: any = null;

	useEffect(() => {
		if (searchInput && searchInput.current) {
			searchInput.current.value = searchParam || "";
		}

		if (searchTypeInput && searchTypeInput.current) {
			searchTypeInput.current.value = searchTypeParam || "users";
		}

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
		let q: string = "";
		let searchType: string = "";
		q = searchInput.current ? searchInput.current.value : "";
		searchType = searchTypeInput.current ? searchTypeInput.current.value : "";

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
};

export default SearchBox;
