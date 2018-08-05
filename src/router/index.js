import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import UserList from '@/components/UserList'
import ItemList from '@/components/ItemList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/user/list',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/item/list',
      name: 'ItemList',
      component: ItemList
    },
    { path: '*', redirect: '/' }
  ]
})
