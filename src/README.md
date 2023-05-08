# SRC Summary

Here is an overview and explanation of all the folders found in the src. The src is the main folder where developers can create, edit, and organize the application's source files, including JavaScript, CSS, HTML, images, and other assets.

## Components

The components folder was created to store all of the application's reusable and modular components. These components were created to reuse elements with customizable content and styles. They also allow for better organization and separation of concerns within the codebase, making it easier to maintain and scale the application over time.

In this folder, a file named App.vue serves as the container for the entire application and defines the overall layout and structure of the application. The file consists of a template with a `<RouterView />` which is used to display the component that corresponds to the current route, which is defined in the router configuration file.

This folder also contains a `main.js` file that sets up the basic structure of a Vue application by importing the router, the store, and the entry point for styling.

### Button

This folder contains the html of the buttons found in the To Do List. The template defines a button element with a class of "button" and a slot element inside it.
The slot element is used to allow content to be passed into the button component from its parent component.
In the html, the stylesheet containing the styles for the button is imported.
The "scoped" attribute means that the styles only apply to this specific component and will not affect other components on the page.

### Header

This folder contains the html of the header of the To Do List.
In the html, the stylesheet containing the styles for the header is imported.
The "scoped" attribute means that the styles only apply to this specific component and will not affect other components on the page.

### Icons

This folder contains the svg of the icons used in the To Do List.

### List

This folder includes and index and styles to render the list. Moreover, this folder also has an index and style sheet to render the tasks on the list.

The index of the list uses a `script setup` block (a new feature in Vue.js 3) allows you to use the `import` statement to import external modules like `mapState` from Vuex and `Task` from a local component.

The `template` block defines the structure of the list using an unordered list element (`ul`). The list has two sections: an "Add Task" button and a form that appears when the "Add Task" button is clicked. The form includes an input field for the task name and two buttons: one to add the task and another to cancel the form.

The `Task` component is used to render each task in the list. It loops over an array of `todos` using `v-for` and passes each `todo` object as a prop to the `Task` component.

Finally, the `style` block defines the component's scoped styles using Sass syntax.

**_Task_**
In the index, the `Button` component and two icons (`Trash` and `Edit`) are imported.

The `<template>` section defines the component's template. It is a list item (`<li>`) that has a checkbox (`<input type="checkbox">`), a label (`<label>`) and two buttons (`<Button>`) that use the imported icons as their content.

The label contains the title of the task (`{{ todo.title }}`) and the two buttons. The `handleDelete()` method is called when the Trash button is clicked, which dispatches a `DELETE` action to the Vuex store, passing the `_id` property of the `todo` object as the payload. It then dispatches a `FETCH` action to update the list of tasks.

Finally, the `style` block defines the component's scoped styles using Sass syntax.

## Fonts

The fonts folder contains the downloaded fonts used in the application.

## Pages

In the `index.js` file located in the `pages` folder, the statement `export { default as Home } from './Home'` is used to re-export the default export of the `Home.js` file.

### Home

This folder contains the homepage of the application.

The `<script setup>` block is used to import the `Header` and `List` components from their respective files.

The `<template>` block defines the structure of the page. It contains a `<main>` element with a `role` attribute set to "main" for accessibility purposes. The `<div>` with class "home-page--container" wraps the `<Header>` and `<List>` components.

The `<Header>` and `<List>` components are used inside the template using custom tags, which correspond to their component names.

Finally, the `style` block defines the component's scoped styles using Sass syntax.

## Router

A router is a module that allows navigation between different pages or views in a a web application. In Vue.js, the Vue Router is a plugin that provides the router functionality and allows you to define your application's navigation routes.

In this folder, a router is created using the `createRouter()` function from the Vue Router library. It takes an object with two properties:

1.  `history`: The mode of history that will be used by the router. In this case, `createWebHashHistory()` is used, which creates a hash-based history that works for single-page applications hosted on static servers.
2.  `routes`: An array of route objects that define the paths and components of the application. In this case, there is only one route defined with a path of `'/'`, a name of `'index'`, and a component of `Home`.

The `router` object is then exported to be used in the Vue application. The purpose of the router is to listen to changes in the application's URL and render the appropriate component based on the current route. So in this case, when the user navigates to the root URL (`'/'`), the `Home` component will be rendered.

## Scss

This folder contains the stylesheets of the application.

### Index

Here all the following stylesheets have been imported.

### Base

Here the base global styles of the application are defined. The base styles help establish a consistent look and feel for the project and are often shared across different components or pages.

### Fonts

In this folder, the downloaded styles are imported and converted into fonts that can be used everywhere in the CSS. `@font-face` is a CSS at-rule that allows you to define custom fonts to be used on a web page. In this case, the `font-family` property defines the name of the font family, and the `src` property specifies the location of the font file in the project.

### Normalize

This is a CSS stylesheet for the purpose of normalizing the styles across different browsers. It is called Normalize.css. It resets or styles the default styling of different HTML elements so that they are consistent across various browsers.

### Root

This folder contains global CSS variables and styles that apply to the entire project. In this folder, the variables used throughout the project, such as font sizes and colours, have been defined. This can help to maintain consistency and simplify the process of updating styles across multiple files.

## Store

In this code snippet, we are creating a new Vuex store instance using the `createStore` function provided by the Vuex library. Vuex is a state management library for Vue.js applications.

The `modules` option is used to register modules that contain their own state, mutations, actions, and getters. In this case, we are registering a module called `todos` that is defined in a separate file called `todos.module.js`.

The `Todos` object is imported and contains the state, mutations, actions, and getters for the `todos` module.

By registering this `todos` module with the Vuex store, we can access its state and actions from any component in our Vue.js application that has access to the Vuex store instance. This allows us to manage the state of our application in a more organized and scalable way.

### src

The file `todo.module.js` exports an object used to manage the list of todos using the Vuex store.

The `state` object contains properties such as `classCount` to keep track of the index of the current class name to apply to the todo item, `classNames` to hold a list of class names to apply to the todo item, `list` to hold an array of todos, `error` to store the error message when fetching todos, and `fetching` to indicate if the data is currently being fetched.

The `mutations` object contains functions that modify the state. For example, the `ADD_TODO` function adds a new todo to the `list` array.

The `actions` object contains functions that perform asynchronous operations and commit mutations to update the state. For example, the `ADD` action makes a POST request to the API to add a new todo, commits the `ADD_TODO` mutation to update the state with the new todo, and commits the `INCREMENT_COUNT` mutation to update the `classCount` property. The `FETCH` action makes a GET request to fetch all the todos from the API and commits the `SET_TODOS` mutation to update the state with the fetched todos.
