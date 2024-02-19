import type { RouteRecordRaw } from 'vue-router'

import { PageConstant } from '@/enums/pageContant'

import { BlankLayout } from '@/layouts'

export const basicRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Root',
    redirect: PageConstant.BASE_HOME,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: BlankLayout,
    children: [
      // {
      //   path: '/:pathMatch(.*)*',
      //   name: 'NotFoundPage',
      //   component: () => import('@/views/not-found/index.vue'),
      // }
    ],
  },
]
