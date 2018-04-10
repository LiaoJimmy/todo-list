import {
  ADD_TODO_ITEM,
  CHECK_TODO_ITEM,
  EDIT_TODO_ITEM,
} from './mutation-types';

const mutations = {
  [ADD_TODO_ITEM](state, { item }) {
    state.todolist.push({
      index: state.todolist.length,
      item,
      checked: false,
    });
  },
  [CHECK_TODO_ITEM](state, { index }) {
    state.todolist[index].checked = !state.todolist[index].checked;
  },
  [EDIT_TODO_ITEM](state, { index, item }) {
    state.todolist[index].item = item;
  },
};

export default mutations;
