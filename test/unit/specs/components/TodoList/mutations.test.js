import mutations from '../../../../../src/components/TodoList/mutations';
import { ADD_TODO_ITEM } from '../../../../../src/components/TodoList/mutation-types';

describe('mutations', () => {
  describe('ADD_TODO_ITEM', () => {
    it('Add one item', () => {
      const state = {
        todolist: [],
      };
      const payload = {
        item: 'Learn Node.js',
      };

      mutations[ADD_TODO_ITEM](state, payload);

      expect(state.todolist).toEqual([
        {
          index: 0,
          item: 'Learn Node.js',
          checked: false,
        },
      ]);
    });

    it('Add one more item, index should plus one', () => {
      const state = {
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

      mutations[ADD_TODO_ITEM](state, payload);

      expect(state.todolist).toEqual([
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
      ]);
    });
  });
});
