import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: ""
  },
  mutations: {
    setToken(state, token){
      state.token = token;
    },
    clearToken(state){
      state.token = "";
    }
  },
  actions: {
    login(authData) {
      console.log(authData);
    },
    logout() {

    }
  },
  getters: {
    getToken({state}) {
      return state.token;
    }
  }
});

export default store;
