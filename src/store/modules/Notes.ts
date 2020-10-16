import { Note } from '@/types';

export default {
  state: {
    notes: [],
  },
  mutations: {
    setNotes(state: any, payload: Note[]) {
      state.notes = payload;
    },
  },
  actions: {
    fetchNotes({ commit }: any) {
      commit('setNotes', [
        {
          message: 'Move Items into DB',
          date: new Date().toDateString(),
          project: {
            title: 'Morgans Danger App',
            color: '#3b9485',
          },
        },
        {
          message: 'Fix PUT method',
          date: new Date().toDateString(),
          project: {
            title: 'Morgans Danger App',
            color: '#3b9485',
          },
        },
        {
          message: 'Move types to their own folder and file',
          date: new Date().toDateString(),
          project: {
            title: 'Morgans Danger App',
            color: '#3b9485',
          },
        },
      ]);
    },
  },
};
