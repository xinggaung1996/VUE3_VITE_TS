/*
 * @Description: 
 * @Version: 2.0
 * @Author: XG
 * @Date: 2021-10-05 16:37:36
 * @LastEditors: xuchaoxin
 * @LastEditTime: 2021-11-22 13:36:12
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index' // 引入路由
import './index.css';

const app = createApp(App);
app.use(router) // 挂载路由到app上
app.mount('#app')

