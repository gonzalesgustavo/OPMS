import { Message } from '@/types';

export default {
  state: {
    messages: [],
  },
  mutations: {
    setMessages(state: any, payload: Message[]) {
      state.messages = payload;
    },
  },
  actions: {
    fetchMessages({ commit }: any) {
      commit('setMessages', [
        {
          to: '@macknaw',
          from: '@sampson',
          msg: 'Post request failed',
          project: {
            title: 'Morgans Danger App',
            color: '#3b9485',
          },
        },
        {
          to: '@macknaw',
          from: '@Lestar',
          msg: 'Moved Filter to global',
          project: {
            title: 'Morgans Danger App',
            color: '#3b9485',
          },
        },
        {
          to: '@macknaw',
          from: '@Gorbo',
          msg: 'Advanced filtering options added to write view',
          project: {
            title: 'Morgans Danger App',
            color: '#3b9485',
          },
        },
      ]);
    },
  },
};
