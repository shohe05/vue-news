import Vue from 'vue';
import Router from 'vue-router';
import List from '@/components/List';
import Detail from '@/components/Detail';
import Stream from '@/components/Stream';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/stream',
      name: 'Stream',
      component: Stream,
    },
    {
      path: '/',
      name: 'List',
      component: List,
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
    },
  ],
});
