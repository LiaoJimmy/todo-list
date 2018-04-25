import Vue from 'vue';
import Router from 'vue-router';
import TodoList from '../components/TodoList/Container';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: TodoList,
    },
    {
      path: '/en-US',
      name: 'en-US',
      component: TodoList,
    },
    {
      path: '/zh-TW',
      name: 'zh-TW',
      component: TodoList,
    },
    {
      path: '/zh-CN',
      name: 'zh-CN',
      component: TodoList,
    },
    {
      path: '/*',
      name: 'others',
      component: TodoList,
      redirect: {
        name: 'en-US',
      },
    },
  ],
});
