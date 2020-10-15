import { Project } from '@/types';

export default {
  state: {
    projects: [],
  },
  mutations: {
    setProjects(state: any, payload: Project[]) {
      state.projects = payload;
    },
  },
  actions: {
    fetchProjects({ commit }: any) {
      commit('setProjects', [
        {
          title: 'Robot Car No.2',
          userId: '@23344',
        },
        {
          title: 'Auto Text Generator',
          userId: '@23344',
        },
        {
          title: 'Auto Text Generator',
          userId: '@23344',
        },
        {
          title: 'Auto Text Generator',
          userId: '@23344',
        },
        {
          title: 'Auto Text Generator',
          userId: '@23344',
        },
        {
          title: 'Auto Text Generator',
          userId: '@23344',
        },
      ]);
    },
  },
};
