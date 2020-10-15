import { Task } from '@/types';

export default {
  state: {
    tasks: [],
  },
  mutations: {
    setTasks(state: any, payload: Task[]) {
      state.tasks = payload;
    },
  },
  actions: {
    fetchTasks({ commit }: any) {
      commit('setTasks', [
        {
          message: 'Update task module.',
          project: {
            title: 'Morgans Danger App',
            color: '#3b9485',
          },
        },
        {
          message: 'Fix jira ticket',
          project: {
            title: 'Morgans Danger App',
            color: '#3b9485',
          },
        },
        {
          message: 'Add managment view and corresponding backend routes',
          project: {
            title: 'Morgans Danger App',
            color: '#3b9485',
          },
        },
      ]);
    },
  },
};
