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
    login({commit}, authData) {
      const url = authData.isUser ? `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FIREBASE_API_KEY}` : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_FIREBASE_API_KEY}`;
      return Vue.axios.post(url, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      }).then((res) => {
        commit("setToken", res.data.idToken);
      }).catch((err) => {
        console.log(err);
      });
    },
    logout() {

    }
  },
  getters: {
    isAuthenticated(state) {
      return state.token !== "";
    }
  }
});

export default store;
