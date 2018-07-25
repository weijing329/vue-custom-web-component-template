import Vue from "vue"

import Vuetify from "vuetify"
Vue.use(Vuetify)

// import shared static asset
import "./style.scss";

// include vue-custom-element plugin to Vue
import VueCustomElement from "vue-custom-element"
Vue.use(VueCustomElement)

// import and register your component(s)
import App from "./layouts/app/app.vue";
Vue.customElement("wallet-module", App);