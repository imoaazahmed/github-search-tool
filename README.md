# GitHub Search Tool

The search tool helps you search for the specific user or repository you want to find on GitHub. Think of it the way you think of performing a search on Google. It's designed to help you find the one result you're looking for (or maybe the few results you're looking for). Just like searching on Google, you sometimes want to see a few pages of search results so that you can find the item that best meets your needs. To satisfy that need, the search tool provides up to 1,000 results for each search.

## Contents Of This File

-   [Getting Started](#getting-started)
-   [Installation](#installation)
-   [Rate Limit](#rate-limit)
-   [Built with](#built-with)
-   [Author](#author)
-   [License](#license)

## Getting Started

Try it out: [GitHub search tool](https://github-search-tool.herokuapp.com)

> It may take a minute for the first opening to load the web page because this tool has been deployed on a free dyno and it gets sleeps after 30 mins of inactivity.

**Home view**
![Image](https://raw.githubusercontent.com/imoaazahmed/github-search-tool/master/src/img/static/home.png)

**Users search view**
![Image](https://raw.githubusercontent.com/imoaazahmed/github-search-tool/master/src/img/static/users.png)

**Repositories search view**
![Image](https://raw.githubusercontent.com/imoaazahmed/github-search-tool/master/src/img/static/repos.png)

## Installation

After cloning the app, in the project directory:

1. Run the command `yarn` to install all the packages and dependencies.
2. Run the command `yarn start` to start running the app in the development mode.
3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
4. Happy developing.

Or you can visit the tool [here](https://github-search-tool.herokuapp.com) if you just want to browse it.

## Rate Limit

The Search API has a custom rate limit. For requests using Basic Authentication, OAuth, or client ID and secret, you can make up to 30 requests per minute. For unauthenticated requests, the rate limit allows you to make up to 10 requests per minute.

## Built With

-   [React.js](https://reactjs.org/) - Create interactive UIs.
-   [Typescript](https://www.typescriptlang.org/) - Adding static type definitions.
-   [Redux](https://redux.js.org/) - State management.
-   [Yarn](https://yarnpkg.com/) - Dependency management.
-   [GitHub search API](https://docs.github.com/en/rest/reference/search) - Fetching users and repositories data.

## Author

**Moaaz Ahmed** - Frontend work.

-   [LinkedIn](https://linkedin.com/in/imoaazahmed)
-   [GitHub](https://github.com/imoaazahmed)

## License

This project is licensed under the [MIT](https://en.wikipedia.org/wiki/MIT_License) License.
