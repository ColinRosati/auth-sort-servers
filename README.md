## Server Viewer app

This app has a basic authorization & list seach/sort capabilities using React, Redux, Thunks & Typescript

## Goal

Create a server explorer web app with sign-in authorization:
○ Implement login (POST http://playground.tesonet.lt/v1/tokens { username: "tesonet", password: "partyanimal" })

○ Display servers list - GET http://playground.tesonet.lt/v1/servers ○ Make servers list sortable and searchable by name/distance

● App must work on all modern browsers + IE11

## If I had more time

If I had more time to work on this I would fix the API request CORS errors. I tried a few fetching libraries (Axios), different middleware setups, app proxy redirects with no results. The API was working in Postman with "Automatically follow redirects", &
"Follow original HTTP Method" set.

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
