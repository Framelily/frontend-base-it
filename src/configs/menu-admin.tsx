import type { IMenu } from '@/types/modules/Base'

const menuAdmin = [
  {
    label: 'แดชบอร์ด',
    path: '/admin/dashboard',
    icon: 'dashboard',
    text: '',
    list: [],
  },
  {
    label: 'รายงาน',
    path: '',
    icon: 'report',
    text: '',
    list: [
      {
        label: 'ยอดขาย',
        path: '/admin/report/sales',
        text: '',
      },
      {
        label: 'การใช้เครดิตของลูกค้า',
        path: '/admin/report/customer-credit',
        text: '',
      },
    ],
  },
  {
    label: 'จัดการ',
    path: '',
    icon: 'manage',
    text: '',
    list: [
      {
        label: 'การเงิน',
        path: '/admin/manage/',
        text: '',
      },
      {
        label: 'คำขอชื่อผู้ส่ง',
        path: '/admin/manage/',
        text: '',
      },
      {
        label: 'ผู้ติดต่อ',
        path: '/admin/manage/',
        text: '',
      },
      {
        label: 'ข้อมูล',
        path: '/admin/manage/',
        text: '',
      },
    ],
  },
] as IMenu[]

export default menuAdmin
