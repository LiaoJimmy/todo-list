export default {
  filterItems: ({ search, todolist }) => {
    if (search === '') {
      return todolist;
    }
    return todolist.filter(({ item }) => item.includes(search));
  },
};
