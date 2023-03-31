import { createStore } from "vuex";
import Todos from "./src/todos.module.js";

export default createStore({
  modules: {
    todos: Todos,
  },
});
