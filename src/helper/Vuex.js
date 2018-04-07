import Vuex from 'vuex';
import mutations from '../components/TodoList/mutations';

export const getStore = (vue) => {
  const state = {
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
    mutations,
    state,
  });
};

export default {
  getStore,
};
