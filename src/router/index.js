import Vue from 'vue';
import Router from 'vue-router';
import List from '@/components/List';
import Detail from '@/components/Detail';
import Stream from '@/components/Stream';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Stream',
      component: Stream,
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
    },
  ],
});
