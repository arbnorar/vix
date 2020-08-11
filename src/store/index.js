import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkTheme: true,
  },
  getters: {
    darkTheme: (state) => state.darkTheme,
  },
  actions: {
    async changeTheme({ commit }, isDark) {
      commit("CHANGE_THEME", isDark);
    },
  },
  mutations: {
    CHANGE_THEME: (state, isDark) => {
      state.darkTheme = isDark;
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});
