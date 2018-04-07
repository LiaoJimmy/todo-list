import Vue from 'vue';
import Router from 'vue-router';
import Common from '../components/Common/Container';
import TodoList from '../components/TodoList/Container';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Common',
      component: Common,
      children: [
        {
          path: '/',
          name: 'TodoList',
          component: TodoList,
        },
      ],
    },
  ],
});
