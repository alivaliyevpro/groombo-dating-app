import type { RouteRecordRaw } from 'vue-router'

import { PageConstant } from '@/enums/pageContant'

import { DefaultLayout } from '@/layouts'

const route: RouteRecordRaw = {
  path: PageConstant.ABOUT_PAGE,
  name: 'about',
  component: DefaultLayout,
  redirect: PageConstant.ABOUT_PAGE,
  children: [
    // {
    //   path: '',
    //   name: 'about-page',
    //   component: () => import('@/views/about/index.vue')
    // }
  ],
}

export default route
