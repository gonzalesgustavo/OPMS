import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.filter('textlimit', (value: string, limit: number) => {
  const MaxCount = limit;
  return value.slice(0, MaxCount) + (value.length > MaxCount ? '...' : '');
});

Vue.filter('initials', (value: string) => {
  const valArr = value.split(' ');
  const initialsStr = valArr.map(init => {
    return init[0];
  });
  return initialsStr
    .toString()
    .toUpperCase()
    .replace(/,/g, '');
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
