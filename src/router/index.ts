/*
 * @Description: 
 * @Version: 2.0
 * @Author: XG
 * @Date: 2021-10-06 23:24:20
 * @LastEditors: xuchaoxin
 * @LastEditTime: 2021-10-06 23:24:20
 */
//现在创建router的方式与vue2.x的版本已经很不同了
import {createRouter, createWebHashHistory} from 'vue-router';
const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: () => import('../components/home.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(), //替代之前的mode，是必须的
    routes
});
export default router;