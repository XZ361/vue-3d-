import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import ping from '@/components/ping'
import san from '@/components/san'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
    name:'ping',
      component: ping,
        
    },
      {
        path:'/san',
        name:'san',
          component:san
      }
      
  ]
})
