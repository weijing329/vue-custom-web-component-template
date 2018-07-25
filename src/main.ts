import Vue from "vue"

import Vuetify from "vuetify"
Vue.use(Vuetify)

// import shared static asset
import "./style.scss";

// include vue-custom-element plugin to Vue
import VueCustomElement from "vue-custom-element"
Vue.use(VueCustomElement)

// import and register your component(s)
import WalletModule from "./components/wallet/wallet.vue"
Vue.customElement("wallet-module", WalletModule)
