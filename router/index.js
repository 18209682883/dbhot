import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page'
import loig from '@/page/loig'

import shop from '@/components/shop'
import show1 from '@/components/show1'
import xiang from '@/components/xiang'
import sk1 from '@/components/sk1'
import sk2 from '@/components/sk2'





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/loig'
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      beforeEnter(to,form,next){
        if(sessionStorage.getItem('token')){
          next()
        }else{
          alert('请先登录')
          next('/')
        }
      },
      children:[
        {
           path: 'sk1',
          name: 'sk1',
          component: sk1,
          children:[
            {
              path: 'shop',
              name: 'shop',
              component: shop
            },
            {
              path: 'show1',
              name: 'show1',
              component: show1
            },
            {
              path: 'xiang',
              name: 'xiang',
              component: xiang
            },
          ]
        },
        {
          path: 'sk2',
         name: 'sk2',
         component: sk2
       },

        {
          path:'/index',
          redirect: '/index/sk1'
        }
      ]
    },
    {
      path: '/loig',
      name: 'loig',
      component: loig
    }

  ]
})
