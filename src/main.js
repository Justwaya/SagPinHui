import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
//三级联动组件
import TypeNavIndex from '@/pages/Home/TypeNavIndex';

Vue.component(TypeNavIndex.name,TypeNavIndex)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
