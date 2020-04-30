import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/style.scss' // 全局样式
import 'mint-ui/lib/style.css' // mint-ui的css
import VueAwesomeSwiper from 'vue-awesome-swiper' // swiper
import 'swiper/dist/css/swiper.css' // swiper的css引入
import {InfiniteScroll,Toast} from 'mint-ui'  // 上拉加载
import commen from './utils/commen' // 公共方法
import http from './utils/http' // 网络请求

Vue.prototype.$http = http

Vue.use(VueAwesomeSwiper)
Vue.use(InfiniteScroll)
Vue.use(commen)

Vue.config.productionTip = false
Vue.prototype.$toast = Toast 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
