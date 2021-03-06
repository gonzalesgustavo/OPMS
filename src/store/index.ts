import Vue from 'vue';
import Vuex from 'vuex';
import ButtonManager from './modules/ButtonManager';

import Messages from './modules/Message';
import Notes from './modules/Notes';
import Projects from './modules/Projects';
import Tasks from './modules/Tasks';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Message: Messages,
    Project: Projects,
    Task: Tasks,
    Note: Notes,
    Button: ButtonManager,
  },
});

export default store;
