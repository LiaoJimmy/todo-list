import { ADD_TODO_ITEM } from './mutation-types';

const mutations = {
  [ADD_TODO_ITEM](state, { item }) {
    state.todolist.push({
      index: state.todolist.length,
      item,
      checked: false,
    });
  },
};

export default mutations;
