import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import PostIndex from "../views/PostIndex.vue";
import PostNew from "../views/PostsNew.vue";
import PostShow from "../views/PostsShow.vue";
import PostEdit from "../views/PostEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/test",
    name: "Test",
    component: () => import(/* webpackChunkName: "about" */ "../views/Test.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  {
    path: "/posts",
    name: "posts-index",
    component: PostIndex,
  },
  {
    path: "/posts/new",
    name: "posts-new",
    component: PostNew,
  },
  {
    path: "/posts/:id",
    name: "posts-show",
    component: PostShow,
  },
  { path: "/posts/:id/edit", name: "posts-edit", component: PostEdit },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
