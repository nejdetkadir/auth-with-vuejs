import Vue from "vue";
import VueRouter from "vue-router";

// pages
import About from "@/pages/About";
import HomePage from "@/pages/Homepage";
import Auth from "@/pages/auth/Auth";

Vue.use(VueRouter);

export const router = new VueRouter({
  routes:
    [
      {
        path: "/", component: HomePage
      },
      {
        path: "/about", component: About
      },
      {
        path: "/auth", component: Auth
      }
    ],
  mode: "history"
});
