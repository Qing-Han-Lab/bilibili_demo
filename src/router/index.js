import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path : '/',
    name : 'layout',
    component : ()=>import('@/views/layout/layout')
  }
]

// 动态将views里的页面导入,自动化

const viewPages = require.context('@/views',true,/\.json$/);


let analyse = function(resolve){
   resolve.keys().forEach((keyName)=>{
     let pagePath = resolve(keyName).page;
     let pathList = pagePath.split('/');
     let routesItem = {
       path : `/${pathList[pathList.length-1]}`,
       name : pathList[pathList.length-1],
       component : ()=>import(`@/views/${pagePath}`)
     }
     routes.push(routesItem)
   })
}
analyse(viewPages)



const router = new VueRouter({
  routes
})

export default router
