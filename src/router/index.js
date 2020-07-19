import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Home = ()=>import('../views/home/Home')
const List = ()=>import('../views/list/List')
const Car = ()=>import('../views/car/Car')
const User = ()=>import('../views/user/User')

const Detail = ()=>import('../views/detail/Detail')

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
  },
  {
    path:'/list',
    component:List,
  },
  {
    path:'/car',
    component:Car,
  },
  {
    path:'/user',
    component:User,
  },
  {
    path:'/detail/:id',
    component:Detail,
  },
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
