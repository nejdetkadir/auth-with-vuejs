import Vue from "vue";
import VueRouter from "vue-router";

import store from "@/store";

// pages
import About from "@/pages/About";
import HomePage from "@/pages/Homepage";
import Auth from "@/pages/auth/Auth";

Vue.use(VueRouter);

export const router = new VueRouter({
  routes:
    [
      {
        path: "/", component: HomePage, beforeEnter(to, from, next) {
          if (store.getters.isAuthenticated) {
            next();
          } else {
            next("/auth");
          }
        }
      },
      {
        path: "/about", component: About, beforeEnter(to, from, next) {
          if (store.getters.isAuthenticated) {
            next();
          } else {
            next("/auth");
          }
        }
      },
      {
        path: "/auth", component: Auth
      }
    ],
  mode: "history"
});
