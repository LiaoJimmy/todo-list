import Vue from 'vue';
import Router from 'vue-router';
import Common from '../components/Common/Container';
import TodoList from '../components/TodoList/Container';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Common,
      children: [
        {
          path: '/',
          component: TodoList,
        },
      ],
    },
  ],
});
