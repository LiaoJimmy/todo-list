import {
  ADD_ITEM,
  CHECK_ITEM,
  EDIT_ITEM,
  DELETE_ITEM,
} from './mutation-types';

const mutations = {
  [ADD_ITEM](state, { item }) {
    state.todolist.push({
      index: state.todolist.length,
      item,
      checked: false,
    });
  },
  [CHECK_ITEM](state, { index }) {
    state.todolist[index].checked = !state.todolist[index].checked;
  },
  [EDIT_ITEM](state, { index, item }) {
    state.todolist[index].item = item;
  },
  [DELETE_ITEM](state, { index }) {
    state.todolist = state.todolist.filter(item => item.index !== index);
  },
};

export default mutations;
