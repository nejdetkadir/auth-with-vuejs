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
    initAuth({commit}) {
      let token = localStorage.getItem("token");
      if (token) {
        commit("setToken", token);
        this.$router.replace("/");
      } else {
        this.$router.replace("/auth");
        return false
      }
    },
    login({commit}, authData) {
      const url = authData.isUser ? `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FIREBASE_API_KEY}` : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_FIREBASE_API_KEY}`;
      return Vue.axios.post(url, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      }).then((res) => {
        commit("setToken", res.data.idToken);
        localStorage.setItem("token", res.data.idToken);
      }).catch((err) => {
        console.log(err);
      });
    },
    logout({commit}) {
      commit("clearToken");
      localStorage.removeItem("token");
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.token !== "";
    }
  }
});

export default store;
