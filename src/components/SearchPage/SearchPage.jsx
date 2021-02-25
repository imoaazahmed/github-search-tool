import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMoreUsersData, fetchMoreRepositoriesData } from "../../redux";

// Components
import SearchBox from "../SearchBox/SearchBox";

// Images
import SkeletonLoaderCard from "../../img/skeleton-loader-card.svg";

// CSS
import "./SearchPage.css";

function SearchPage(props) {
	const usersData = useSelector((state) => state.search.usersData);
	const repositoriesData = useSelector((state) => state.search.repositoriesData);
	const { searchTypeParam, searchParam } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		document.addEventListener("scroll", handleScroll);
		return () => document.removeEventListener("scroll", handleScroll);
		// eslint-disable-next-line
	}, [searchTypeParam, searchParam, usersData.paginate, repositoriesData.paginate]);

	const isLoading = () => {
		if (searchTypeParam === "users" && usersData.loading) return true;
		else if (searchTypeParam === "repositories" && repositoriesData.loading) return true;
		else return false;
	};

	const isLoadingMore = () => {
		if (searchTypeParam === "users" && usersData.paginate.loading) return true;
		else if (searchTypeParam === "repositories" && repositoriesData.paginate.loading) return true;
		else return false;
	};

	const isMaxReached = () => {
		if (searchTypeParam === "users" && usersData.paginate.maxReached) return true;
		else if (searchTypeParam === "repositories" && repositoriesData.paginate.maxReached) return true;
		else return false;
	};

	const handleRequestsRateLimit = () => {
		if (searchTypeParam === "users" && usersData.error?.status === 403) return true;
		else if (searchTypeParam === "repositories" && repositoriesData.error?.status === 403) return true;
		else return false;
	};

	const handleErrors = () => {
		if (searchTypeParam === "users" && usersData.error?.status !== 403) return usersData.error?.data?.message;
		else if (searchTypeParam === "repositories" && repositoriesData.error?.status !== 403) return repositoriesData.error?.data?.message;
		else return false;
	};

	const handleScroll = () => {
		const page = document.getElementsByTagName("html")[0];
		const hitBottom = page.scrollHeight - Math.ceil(page.scrollTop) <= page.clientHeight;

		if (searchTypeParam === "users") {
			if (hitBottom && !usersData.paginate.maxReached && !usersData.paginate.loading) {
				dispatch(fetchMoreUsersData(searchParam));
			}
		}

		if (searchTypeParam === "repositories") {
			if (hitBottom && !repositoriesData.paginate.maxReached && !repositoriesData.paginate.loading) {
				dispatch(fetchMoreRepositoriesData(searchParam));
			}
		}
	};

	return (
		<div className="page-container">
			<div className="search-page-wrapper">
				<SearchBox />

				<div className="search-results-wrapper">
					{isLoading() && (
						<div className="skeleton-loader-cards-wrapper">
							<img src={SkeletonLoaderCard} alt="Loading..." />
							<img src={SkeletonLoaderCard} alt="Loading..." />
							<img src={SkeletonLoaderCard} alt="Loading..." />
							<img src={SkeletonLoaderCard} alt="Loading..." />
							<img src={SkeletonLoaderCard} alt="Loading..." />
							<img src={SkeletonLoaderCard} alt="Loading..." />
						</div>
					)}

					{!isLoading() && (
						<>
							{/* Check if error occurred */}
							{handleErrors() && <div>{handleErrors()}</div>}

							{/* Check if the requests exceeds 10 requests per minute */}
							{handleRequestsRateLimit() && (
								<div>You have exceeds the rate limit of requests (10 req/min), Please try again after one minute.</div>
							)}

							{/* Render users results */}
							{searchTypeParam === "users" && (
								<div>
									{usersData.data?.items?.length === 0 && <div>Sorry, No users for this search term have been found.</div>}

									{usersData.data?.items?.length !== 0 && (
										<div className="cards-wrapper">
											{usersData.data?.items?.map((user, index) => (
												<div key={index} className="single-card user-card">
													{user.login}
												</div>
											))}
										</div>
									)}
								</div>
							)}

							{/* Render repositories results */}
							{searchTypeParam === "repositories" && (
								<div>
									{repositoriesData.data?.items?.length === 0 && (
										<div>Sorry, No repositories for this search term have been found.</div>
									)}

									{repositoriesData.data?.items?.length !== 0 && (
										<div className="cards-wrapper">
											{repositoriesData.data?.items?.map((repo, index) => (
												<div key={index} className="single-card repo-card">
													{repo.name}
												</div>
											))}
										</div>
									)}
								</div>
							)}

							{isLoadingMore() && <div className="hint">Loading...</div>}
							{isMaxReached() && <div className="hint">That's all</div>}
						</>
					)}
				</div>
			</div>
		</div>
	);
}

export default SearchPage;
