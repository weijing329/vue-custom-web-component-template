import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

import router from "../../router";

@Component({
  router
})
export default class App extends Vue {
  @Prop(String) name!: string 
}