import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(VueRouter)
export default new VueRouter({
  routes:[
    {
      path:'/msite',
      component:Msite,
      meta:{
        showRouter:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        showRouter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showRouter:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showRouter:true
      }
    },
    {
      path:'/',
      redirect:'/msite'
    },
    {
      path:'/login',
      component:Login
    },
  ]
})
