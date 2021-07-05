This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Server Viewer app

This app has a basic authorization & list seach/sort capabilities using React, Redux, Thunks & Typescript

### requirements

Create a server explorer web app:
○ Implement login (POST http://playground.tesonet.lt/v1/tokens { username: "tesonet", password: "partyanimal" })
○ Display servers list - GET http://playground.tesonet.lt/v1/servers ○ Make servers list sortable and searchable by name/distance
● App must work on all modern browsers + IE11

## If I had more time

If I had more time to work on this I would fix the API request CORS errors. I tried a few fetching librarie (Axios), different middleware setups, app proxy redirects with no results.

I could have added some basic UI validation tests as well. This would test the util functions
by intereacting with the DOM and validating results.

I could have reused more scss classes and added component styling variants via dyanamic classnames.

I would add some UI alerts based on errors in store.

## Steps to run repo

`git pull https://github.com/ColinRosati/auth-sort-servers.git`

`yarn`

`yarn start`

## Available Scripts

In the project directory, you can run:

### `yarn start`

To run app

### `yarn test`

To run tests

### `yarn build`

To make build
