import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import MainPage from "../components/MainPage";
import FirstPage from "../components/FirstPage";
import Edit from "../components/Edit";
import Notifications from "../components/Notifications";

// import Sidebar from "../components/Sidebar";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: FirstPage
  },
  {
    path: "/header",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path:"/mainpage",
    name:"mainpage",
    component:MainPage,
    meta: {
        tokenRequired: false
    }
  },
  {
    path:"/notifications",
    name:"notifications",
    component:Notifications,
    meta: {
        tokenRequired: false
    }
  },
  {
    path:"/login",
    name:"login",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/Login.vue")

  },
  {
    path:"/edit",
    name:"edit",
    component:Edit,
    meta: {
      tokenRequired: false
  }
    // component: () =>
    // import(/* webpackChunkName: "about" */ "../components/Edit.vue")

  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
