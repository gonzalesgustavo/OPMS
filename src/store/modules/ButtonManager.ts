export default {
  state: {
    baseNavAdd: 'project',
  },
  mutations: {
    setBaseNavLocation(state: any, payload: string) {
      state.baseNavAdd = payload;
    },
  },
  actions: {
    assignBaseNavLocation({ commit }: any, location: string) {
      commit('setBaseNavLocation', location);
    },
  },
};
