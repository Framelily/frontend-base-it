import type { IMenu } from '@/types/modules/Base'

const menu = [
  {
    label: 'menu.ourService',
    path: '/',
    list: [
      {
        label: 'menu.service01',
        path: '#',
      },
      {
        label: 'menu.service02',
        path: '#',
      },
      {
        label: 'menu.service03',
        path: '#',
      },
    ],
  },
  {
    label: 'menu.news',
    path: '/news',
    list: [],
  },
  {
    label: 'menu.aboutUs',
    path: '/about',
    list: [],
  },
] as IMenu[]

export default menu
