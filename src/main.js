import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
const BaseBoxPage = () => import(/* webpackChunkName: "BaseBoxPage" */ "./pages/BaseBoxPage");
const RedBoxPage = () => import(/* webpackChunkName: "RedBoxPage" */"./pages/RedBoxPage");

Vue.use(VueRouter);

const routes = [
  { path: "/base", component: BaseBoxPage },
  { path: "/red", component: RedBoxPage }
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
