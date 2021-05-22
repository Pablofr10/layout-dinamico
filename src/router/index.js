import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

function lazyLoad(view) {
  return () => import(`../views/${view}.vue`);
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: lazyLoad("About"),
  },
  {
    path: "/login",
    name: "Login",
    component: lazyLoad("Login"),
    meta: { layout: "empty" },
  },
  {
    path: "/:pathMatch(.*)",
    component: lazyLoad("PageNotFound"),
    meta: { layout: "navbar" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
