import getters from '../../../../../src/components/TodoList/getters';

describe('getters', () => {
  describe('filterItems()', () => {
    it('should filter todlist by search text', () => {
      const search = 'Vue';
      const todolist = [
        {
          index: 0,
          item: 'Learn Node.js',
          checked: false,
        },
        {
          index: 1,
          item: 'Learn Vue.js',
          checked: false,
        },
      ];

      const result = getters.filterItems({ search, todolist });

      expect(result).toEqual([
        {
          index: 1,
          item: 'Learn Vue.js',
          checked: false,
        },
      ]);
    });
  });
});
