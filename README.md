## How to run the application

Make sure to do `npm install` first to install the latest dependencies.

First you need to start the data base so that the server can connect to it and you can save TODOs.
`brew services start mongodb-community@6.0`

To stop it at the end of the development period, run the next line
`brew services stop mongodb-community@6.0`

Then (in another terminal tab) you need to start the backend server so that the API is ready to use for the frontend.
`npm run start:be`

Once that's sorted, then why not run the frontend (in another terminal tab) with
`npm run dev`

VITE_TODO_API_URL=http://localhost:3000/api/v1/todo
