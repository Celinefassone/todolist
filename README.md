## Summary

This application is a To Do list in which users can add and delete tasks. Users can also mark the tasks they have completed by checking a checkbox. These tasks are saved in a data base so that even when the To Do list is not running anymore the tasks will be saved and users will be able to access the same date at another time.

## How to run the application

Open Terminal and change the working directory to the location where you want the project to be
by accessing the folder with the command `cd` and make a new directory my using the `mkdir`

`git clone git@github.com:Celinefassone/todolist.git`

Make sure to do `npm install` first to install the latest dependencies.

First you need to start the data base so that the server can connect to it and you can save TODOs.
`brew services start mongodb-community@6.0`

To stop it at the end of the development period, run the next line
`brew services stop mongodb-community@6.0`

Then (open another terminal tab by using command t) you need to start the backend server so that the API is ready to use for the frontend.
`npm run start:be`

Once that's sorted, then why not run the frontend (in another terminal tab) with
`npm run dev`

## API

VITE_TODO_API_URL=http://localhost:3000/api/v1/todo

## What is in the package json

The dependencies section lists the packages that the application depends on in production (meaning that they are required for the application to run correctly in a production environment). These are the packages listed:

axios: a popular HTTP client for making requests to a server.

body-parser: middleware for parsing incoming request bodies in a middleware before handlers.

cors: middleware for handling Cross-Origin Resource Sharing (CORS) requests.

express: a minimal and flexible web application framework for Node.js. It provides a set of features for building web applications and APIs, such as routing, middleware, templating, and more. Express.js makes it easy to create robust web applications in Node.js.

moment-timezone: a package for handling time and timezone.

mongoose: an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a higher-level abstraction for working with MongoDB, making it easier to define schemas, validate data, and perform queries. Mongoose is widely used in Node.js applications that require database connectivity.

vue: a progressive framework for building user interfaces. It provides a set of features for building reactive and composable user interfaces, such as templates, components, computed properties, and more. Vue.js is popular because of its simplicity and flexibility, making it easy to integrate with existing projects.

vue-router: official router for Vue.js.

vuex: state management pattern and library for Vue.js applications.

The devDependencies section lists the packages that the application depends on only during development (packages required during development only). These are the packages listed:

@vitejs/plugin-vue: a Vite plugin for using Vue.js single-file components.

sass: a preprocessor for writing CSS. It provides a set of features for creating more modular, reusable, and maintainable CSS code, such as variables, functions, mixins, and more. Sass makes it easy to write and manage CSS code for large and complex web applications.

sass-loader: a Webpack loader for Sass and SCSS files.

serve-static: a middleware for serving static files in Express.js.

vite: a build tool for web applications that aims to be fast and flexible. It provides a set of features for developing and building web applications, such as a dev server, hot module replacement, fast builds, and more. Vite is popular because of its speed and ease of use, making it easy to get started with building web applications.

vite-plugin-html: a Vite plugin for generating HTML files.
