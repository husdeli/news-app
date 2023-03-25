# News-app⚡

## Install
- Install NodeJS (https://nodejs.org/en)
- Install dependencies by running `npm i`  in the project directory.

## Run application

### Development


- To start the backend server, open your terminal and type `npm run start:server` in the project directory.

- To start the frontend, open your terminal and type `npm run start:client` in the project directory.

### Build and run

- To build the app and run it locally, open your terminal and type `docker-compose up` in the project directory. 
(**Running docker engine is required**)

After that the app will run on port 3000 by default. It can be accessed using this link: http://localhost:3000

## Testing (TODO)

### Cover the app with unit tests (TODO)

### Cover the most intricate parts of the app with integration and e2e tests (TODO)

Possible test cases:
- Popular news
- - the most popular article should be displayed with its thumbnail and title.
- - all other articles should be displayed with just their title in a list.
- - the list of news articles should be sorted by popularity.
- - the number of articles displayed scales with the window size (??)
- Hot news
- - The "Hot news" list should display a timeline of the most recently added news items.
- - The "Hot news" list should display the most recently added news item at the top.
- E2E
- - All news articles in the .csv file should be displayed on the main page and in the "Hot News" section.
 
