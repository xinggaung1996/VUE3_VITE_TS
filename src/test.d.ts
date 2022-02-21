/*
 * @Description: 
 * @Version: 2.0
 * @Author: XG
 * @Date: 2021-10-06 23:07:30
 * @LastEditors: XG
 * @LastEditTime: 2022-02-21 16:26:43
 */
// 在没用用到需要具体定义的内容的时候，可以只声明一下'*.vue'就可以
// src/main.d.ts
declare module '*.vue' {
    import {ComponentOptions} from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
}
