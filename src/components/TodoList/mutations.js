import {
  ADD_ITEM,
  EDIT_ITEM,
  DELETE_ITEM,
} from './mutation-types';
import { mutationGenerator } from '../../helper/vuex//vuex-model';

export default {
  [ADD_ITEM](state, { item }) {
    state.todolist.push({
      index: state.count,
      item,
      checked: false,
    });
    state.count += 1;
  },
  [EDIT_ITEM](state, { index, item }) {
    state.todolist[index].item = item;
  },
  [DELETE_ITEM](state, { index }) {
    state.todolist = state.todolist.filter(item => item.index !== index);
  },
  ...mutationGenerator([
    'search',
    'filterChecked',
  ]),
};
