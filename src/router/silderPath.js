import abstract from '@/views/common/abstract'

import User from '@/views/setting/user'
import orderList from '@/views/orders/order-list'
import goodsList from '@/views/goods/goods-list'

export default[
  {
    path: '/setting',
    name: 'setting',
    meta: {
      name: '基本设置',
      auth: false,
      icon: ''
    },
    component: abstract,
    children: [
      {
        path: 'user',
        name: 'user',
        meta: {
          name: '个人中心',
          acth: false,
          icon: ''
        },
        component: User
      }
    ]
  },
  {
    path: '/goods',
    name: 'goods',
    meta: {
      name: '商品管理',
      acth: false,
      icon: ''
    },
    component: abstract,
    children: [
      {
        path: 'list',
        name: 'goodsList',
        meta: {
          name: '商品列表',
          acth: false,
          icon: ''
        },
        component: goodsList
      }
    ]
  },
  {
    path: '/orders',
    name: 'orders',
    meta: {
      name: '订单管理',
      acth: false,
      icon: ''
    },
    component: abstract,
    children: [
      {
        path: 'list',
        name: 'orderList',
        meta: {
          name: '订单列表',
          acth: false,
          icon: ''
        },
        component: orderList
      }
    ]
  }
]
