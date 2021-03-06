// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import App from './App';
import ElementUI from './helper/element-ui';
import VueI18n from './helper/vue-i18n';
import Vuex from './helper/vuex';
import router from './router';

ElementUI.init(Vue);
const i18n = VueI18n.initI18n(Vue);
const store = Vuex.initStore(Vue);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  i18n,
  router,
  store,
});
