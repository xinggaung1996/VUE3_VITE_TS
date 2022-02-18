/*
 * @Description: 
 * @Version: 2.0
 * @Author: Do not edit
 * @Date: 2022-02-18 11:27:49
 * @LastEditors: XG
 * @LastEditTime: 2022-02-18 11:28:14
 */

const { resolve } = require("path") //必须要引入resolve
export default {
    alias: {
        "/@/": resolve(__dirname, "src") //把src改为@
    }
}
