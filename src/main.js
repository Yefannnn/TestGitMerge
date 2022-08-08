import Vue from 'vue'
import App from './App.vue'

// 引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入 avue
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
import axios from 'axios'

// 引入 router
import router from '@/router'
// 引入百度地图
import BaiduMap from 'vue-baidu-map'

Vue.config.productionTip = false

Vue.use(ElementUI);
// 注册 avue
Vue.use(Avue,{axios});
// 使用百度地图，并配置自己的 ak
Vue.use(BaiduMap,{ak:'ROuam4Q5WDOHQLxVZ40tKzoXG7XxHl5v'})


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
