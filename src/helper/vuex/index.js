import Vuex from 'vuex';

import getters from '../../components/TodoList/getters';
import mutations from '../../components/TodoList/mutations';
import state from '../../components/TodoList/state';

const initStore = (vue) => {
  vue.use(Vuex);
  return new Vuex.Store({
    getters,
    mutations,
    state,
  });
};

export default {
  initStore,
};
