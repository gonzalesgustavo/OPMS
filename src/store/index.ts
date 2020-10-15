import Vue from 'vue';
import Vuex from 'vuex';

import Messages from './modules/Message';
import Projects from './modules/Projects';
import Tasks from './modules/Tasks';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Message: Messages,
    Project: Projects,
    Task: Tasks,
  },
});

export default store;
