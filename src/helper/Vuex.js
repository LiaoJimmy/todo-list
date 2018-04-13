import Vuex from 'vuex';

import getters from '../components/TodoList/getters';
import mutations from '../components/TodoList/mutations';

export const getStore = (vue) => {
  const state = {
    count: 3,
    filterChecked: false,
    search: '',
    todolist: [
      {
        index: 0,
        item: 'Learn HTML',
        checked: true,
      },
      {
        index: 1,
        item: 'Learn CSS',
        checked: false,
      },
      {
        index: 2,
        item: 'Learn JavaScript',
        checked: false,
      },
    ],
  };

  vue.use(Vuex);
  return new Vuex.Store({
    getters,
    mutations,
    state,
  });
};

export default {
  getStore,
};
