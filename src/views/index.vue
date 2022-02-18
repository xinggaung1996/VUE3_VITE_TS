<!--
 * @Description: 
 * @Version: 2.0
 * @Author: Do not edit
 * @Date: 2022-02-18 10:41:17
 * @LastEditors: XG
 * @LastEditTime: 2022-02-18 11:28:39
-->
<!--
 * @Description: 
 * @Version: 2.0
 * @Author: Do not edit
 * @Date: 2022-02-08 09:55:13
 * @LastEditors: XG
 * @LastEditTime: 2022-02-17 18:03:55
-->

<template>
    <div class="index">
        <NavLeft />
        <NavRight />
    </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue"
import NavLeft from "/@/views/layout/navLeft.vue"
// import NavLeft from "/@/views/layout/navLeft.vue"
import NavRight from "/@/views/layout/navRight.vue"
// import NavRight from "/@/views/layout/navRight.vue"
</script>

<style lang="scss" scoped>
.index {
    width: 100vw;
    height: 100vh;
    display: flex;
}
</style>
