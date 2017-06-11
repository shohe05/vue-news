import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Sample from '@/components/Sample';
import List from '@/components/List';
import Detail from '@/components/Detail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/sample',
      name: 'Sample',
      component: Sample,
    },
    {
      path: '/list',
      name: 'List',
      component: List,
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail,
    },
  ],
});
