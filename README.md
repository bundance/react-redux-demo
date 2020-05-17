This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

#

## Available Scripts

In the project directory, you can run:

### `yarn`

Installs all dependencies needed for the app to run.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## About

This app is a demo app demonstrating the latest versions of React, Redux, Material-UI, Jest and React Testing Library, all working together to implement a responsive app that lists Brewdog beers.

## Functionality
The app fetches a list of all Brewdog beers on first launching. Clicking on a Beer will open a dialog box with more details of that beer. Clicking on the Pizza or Steak submenus will fetch beers that will work especially well with those foods.

## Key Features

Key features of the code include the implementation of:

- a multi-layer generic NavBar component that uses a Primary and Secondary Nav bar component complete with Tab panels
- a generic CardGrid component that lays out an array of items in a grid of cards, the number of which can be controlled via a prop.
- unit tests using React Testing Library complete with mock responses from the server to provide more integration-like tests

## Limitations

The requirements for this app were quite extensive, and not all the requirements could be met within the "2 - 3 hours" window that the task document gave. Accordingly, I focused more on making the code correct, well written, cleanly abstracted, maintainable and testable, rather than focusing on implementing as many features as possible at the expense of clean code.

Of the features missing, the main ones are the lack of a checkout and basket page, and the fact that the API is queried each time a new tab is clicked on, rather than cacheing the data within the Redux store and reading it from a memoized selector. Rather that implement these features, I chose to implement various unit tests instead to provide a more well-rounded app with both features and tests.
