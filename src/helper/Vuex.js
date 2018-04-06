import Vuex from 'vuex';

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
        item: 'Learn JavaSCript',
        checked: false,
      },
    ],
  };

  vue.use(Vuex);
  return new Vuex.Store({
    state,
  });
};

export default {
  getStore,
};
