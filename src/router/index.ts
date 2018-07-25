import Vue from "vue";
import VueRouter from "vue-router";

import Wallet from "../components/wallet/wallet.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/wallet",
      name: " ",
      component: Wallet
    },
    {
      path: "*",
      redirect: '/wallet',
    }
  ],
  mode: "hash",
  linkActiveClass: "active"
});