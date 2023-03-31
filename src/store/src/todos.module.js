import axios from "axios";

export default {
  namespaced: true,

  state: {
    list: [],
    error: null,
    fetching: false,
  },

  mutations: {
    ADD_TODO(state, todo) {
      state.list.push(todo);
    },

    SET_TODOS(state, todos) {
      state.list = todos;
    },

    SET_FETCHING_STATE(state, boolean) {
      state.fetching = boolean;
    },

    SET_ERROR_STATE(state, boolean) {
      state.error = boolean;
    },
  },

  actions: {
    DELETE({ commit }, id) {
      return axios.delete(`${import.meta.env.VITE_TODO_API_URL}/${id}`);
    },
    ADD({ commit }, value) {
      commit("SET_ERROR_STATE", false);
      commit("SET_FETCHING_STATE", true);

      return axios
        .post(`${import.meta.env.VITE_TODO_API_URL}`, {
          title: value,
        })
        .then((res) => {
          commit("ADD_TODO", res.data.todo);
          commit("SET_FETCHING_STATE", false);
        })
        .catch(() => {
          commit("SET_FETCHING_STATE", false);
          commit("SET_ERROR_STATE", true);
        });
    },

    FETCH({ commit }) {
      commit("SET_ERROR_STATE", false);
      commit("SET_FETCHING_STATE", true);

      axios
        .get(`${import.meta.env.VITE_TODO_API_URL}`)
        .then((res) => {
          commit("SET_TODOS", res.data.todos);
          commit("SET_FETCHING_STATE", false);
        })
        .catch((res) => {
          commit("SET_TODOS", []);
          commit("SET_FETCHING_STATE", false);
          commit("SET_ERROR_STATE", true);
        });
    },
  },
};
