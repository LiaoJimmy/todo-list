import mutations from '../../../../../src/components/TodoList/mutations';
import {
  ADD_ITEM,
  EDIT_ITEM,
  DELETE_ITEM,
} from '../../../../../src/components/TodoList/mutation-types';

describe('mutations', () => {
  describe('ADD_ITEM', () => {
    it('Add one item', () => {
      const state = {
        count: 0,
        todolist: [],
      };
      const payload = {
        item: 'Learn Node.js',
      };

      mutations[ADD_ITEM](state, payload);

      expect(state).toEqual({
        count: 1,
        todolist: [
          {
            index: 0,
            item: 'Learn Node.js',
            checked: false,
          },
        ],
      });
    });

    it('Add one more item, index should plus one', () => {
      const state = {
        count: 1,
        todolist: [
          {
            index: 0,
            item: 'Learn Node.js',
            checked: false,
          },
        ],
      };
      const payload = {
        item: 'Learn Vue.js',
      };

      mutations[ADD_ITEM](state, payload);

      expect(state).toEqual({
        count: 2,
        todolist: [
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
        ],
      });
    });
  });

  describe('EDIT_ITEM', () => {
    it('should edit item by index', () => {
      const item = 'Learn SASS';
      const index = 0;
      const state = {
        todolist: [
          {
            index: 0,
            item: 'Learn Node.js',
            checked: true,
          },
        ],
      };

      mutations[EDIT_ITEM](state, { index, item });

      expect(state).toEqual({
        todolist: [
          {
            index: 0,
            item: 'Learn SASS',
            checked: true,
          },
        ],
      });
    });
  });

  describe('DELETE_ITEM', () => {
    it('should delete item by index', () => {
      const index = 1;
      const state = {
        todolist: [
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
        ],
      };

      mutations[DELETE_ITEM](state, { index });

      expect(state).toEqual({
        todolist: [
          {
            index: 0,
            item: 'Learn Node.js',
            checked: true,
          },
        ],
      });
    });
  });
});
