import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/Login'
import Index from '@/page/Index'
import User from '@/components/User'
import Goods from '@/components/Goods'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      beforeEnter:(to,from,next)=>{
        if(sessionStorage.getItem("token")){
          next()
        }else{
          alert("请先登录");
          next("/login")
        }
      },
      children:[
        {
          path: 'user',
          name: 'User',
          component: User
        },
        {
          path: 'goods',
          name: 'Goods',
          component: Goods
        },
        {
          path:"/index",
          redirect:"/index/user"
        }
      ]
    },
    {
      path:"/",
      redirect:"/login"
    }
  ]
})
