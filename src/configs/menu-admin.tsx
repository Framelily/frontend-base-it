import type { IMenu } from '@/types/modules/Base'

const menuAdmin = [
  {
    label: 'แดชบอร์ด',
    path: '/admin',
    icon: 'dashboard',
    list: [],
  },
  {
    label: 'รายงาน',
    path: '',
    icon: 'report',
    list: [
      {
        label: 'รายงาน 1',
        path: '/admin/report/1',
        text: '',
      },
      {
        label: 'รายงาน 2',
        path: '/admin/report/2',
        text: '',
      },
    ],
  },
] as IMenu[]

export default menuAdmin
