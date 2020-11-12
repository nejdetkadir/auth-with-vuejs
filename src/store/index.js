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
    login({state}, authData) {
      console.log(state);
      console.log(authData);
      const url = authData.isUser ? `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FIREBASE_API_KEY}` : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_FIREBASE_API_KEY}`;
      Vue.axios.post(url, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      }).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
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
