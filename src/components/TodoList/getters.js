import {
  ALL,
  CHECKED,
} from './filter-checked';

export default {
  filterItems: ({ filterChecked, search, todolist }) => {
    let result = todolist;
    if (search !== '') {
      result = result.filter(({ item }) => item.includes(search));
    }
    if (filterChecked !== ALL) {
      result = result.filter(({ checked }) => (filterChecked === CHECKED ? checked : !checked));
    }
    return result;
  },
};
