import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
//三级联动组件
import TypeNavIndex from "@/pages/Home/TypeNavIndex";

import store from "@/store";

Vue.component(TypeNavIndex.name, TypeNavIndex);

Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
