import getters from '../../../../../src/components/TodoList/getters';
import {
  ALL,
  CHECKED,
  NOT_CHECKED,
} from '../../../../../src/components/TodoList/filter-checked';

describe('getters', () => {
  describe('filterItems()', () => {
    it('should filter todlist by search text', () => {
      const search = 'Vue';
      const filterChecked = ALL;
      const todolist = [
        {
          index: 0,
          item: 'Learn Node.js',
          checked: true,
        },
        {
          index: 1,
          item: 'Learn Vue.js',
          checked: false,
        },
      ];

      const result = getters.filterItems({ filterChecked, search, todolist });

      expect(result).toEqual([
        {
          index: 1,
          item: 'Learn Vue.js',
          checked: false,
        },
      ]);
    });

    it('should filter todolist by filterChecked (ALL)', () => {
      const search = '';
      const filterChecked = ALL;

      const todolist = [
        {
          index: 0,
          item: 'Learn Node.js',
          checked: true,
        },
        {
          index: 1,
          item: 'Learn Vue.js',
          checked: false,
        },
      ];

      const result = getters.filterItems({ filterChecked, search, todolist });

      expect(result).toEqual(todolist);
    });

    it('should filter todolist by filterChecked (CHECKED)', () => {
      const search = '';
      const filterChecked = CHECKED;

      const todolist = [
        {
          index: 0,
          item: 'Learn Node.js',
          checked: true,
        },
        {
          index: 1,
          item: 'Learn Vue.js',
          checked: false,
        },
      ];

      const result = getters.filterItems({ filterChecked, search, todolist });

      expect(result).toEqual([
        {
          index: 0,
          item: 'Learn Node.js',
          checked: true,
        },
      ]);
    });

    it('should filter todolist by filterChecked (NOT_CHECKED)', () => {
      const search = '';
      const filterChecked = NOT_CHECKED;

      const todolist = [
        {
          index: 0,
          item: 'Learn Node.js',
          checked: true,
        },
        {
          index: 1,
          item: 'Learn Vue.js',
          checked: false,
        },
      ];

      const result = getters.filterItems({ filterChecked, search, todolist });

      expect(result).toEqual([
        {
          index: 1,
          item: 'Learn Vue.js',
          checked: false,
        },
      ]);
    });

    it('should filter todolist by filterChecked (NOT_CHECKED) and search text', () => {
      const search = 'js';
      const filterChecked = NOT_CHECKED;

      const todolist = [
        {
          index: 0,
          item: 'Learn Node.js',
          checked: true,
        },
        {
          index: 1,
          item: 'Learn Vue.js',
          checked: true,
        },
        {
          index: 2,
          item: 'Preview React.js',
          checked: false,
        },
      ];

      const result = getters.filterItems({ filterChecked, search, todolist });

      expect(result).toEqual([
        {
          index: 2,
          item: 'Preview React.js',
          checked: false,
        },
      ]);
    });
  });
});
