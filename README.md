## Server Viewer app

This app has a basic authorization & list seach/sort capabilities using React, Redux, Thunks & Typescript

## Goal

Create a server explorer web app with sign-in authorization:

○ Implement login (POST http://playground.tesonet.lt/v1/tokens { username: "tesonet", password: "partyanimal" })

○ Display servers list - GET http://playground.tesonet.lt/v1/servers ○ Make servers list sortable and searchable by name/distance

● App must work on all modern browsers + IE11

## If I had more time

I could have added some basic UI validation tests as well. This would test the util functions
by intereacting with the DOM and validating results.

I could have reused more scss classes and added component styling variants via dyanamic classnames.

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

### Screengrab
<img width="937" alt="Screen Shot 2021-07-06 at 7 01 04 PM" src="https://user-images.githubusercontent.com/16339467/124639571-9ca85f80-de8c-11eb-969e-57d641576c1f.png">
<img width="938" alt="Screen Shot 2021-07-06 at 7 01 21 PM" src="https://user-images.githubusercontent.com/16339467/124639574-9dd98c80-de8c-11eb-9eaf-eaf0d2d6c686.png">

