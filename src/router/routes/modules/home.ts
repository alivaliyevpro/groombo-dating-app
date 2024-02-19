import type { RouteRecordRaw } from 'vue-router';

import { PageConstant } from '@/enums/pageContant';

import { DefaultLayout } from '@/layouts';

const route: RouteRecordRaw = {
  path: PageConstant.BASE_HOME,
  name: 'home',
  component: DefaultLayout,
  redirect: PageConstant.BASE_HOME,
  children: [
    {
      path: '',
      name: 'home-page',
      component: () => import('@/views/home/index.vue')
    }
  ]
}

export default route
