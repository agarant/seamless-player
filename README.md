# Seamless Player

This project is a player that allow you to create playlists and listen to songs
from several api:

* Soundcloud
* Spotify
* Jamendo

### Required environment variables

You need to set variables (can be set in a .env file) to access the api:

* REACT_APP_JAMENDO_CLIENT_ID
* REACT_APP_SOUNDCLOUD_CLIENT_ID
* REACT_APP_SPOTIFY_CLIENT_ID

This project was bootstrapped with
[Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br> You can
find the most recent version of this guide
[here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents

* [Available Scripts](#available-scripts)
  * [npm start](#npm-start)
  * [npm test](#npm-test)
  * [npm run build](#npm-run-build)
  * [npm run eject](#npm-run-eject)
* [Installing a Dependency](#installing-a-dependency)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br> Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br> You will also see any lint errors in
the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br> See the section
about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br> It correctly bundles
React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br> Your app is
ready to be deployed!

See the section about [deployment](#deployment) for more information.

## Installing a Dependency

The generated project includes React and ReactDOM as dependencies. It also
includes a set of scripts used by Create React App as a development dependency.
You may install other dependencies (for example, React Router) with `npm`:

```sh
npm install --save react-router
```

Alternatively you may use `yarn`:

```sh
yarn add react-router
```
