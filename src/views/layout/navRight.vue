<!--
 * @Description: 
 * @Version: 2.0
 * @Author: Do not edit
 * @Date: 2022-02-08 09:56:08
 * @LastEditors: XG
 * @LastEditTime: 2022-02-18 10:44:31
-->
<!--
 * @Description:
 * @Author: ZY
 * @Date: 2021-01-14 09:11:22
 * @LastEditors: XG
 * @LastEditTime: 2022-02-08 10:04:39
-->

<template>
    <div class="nav-right">
        <div>
            <TopBar />
        </div>
        <div class="nav">
            <NavTitle />
            <NavContent />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue"

import TopBar from "./components/topBar.vue"
import NavTitle from "./components/navTitle.vue"
import NavContent from "./components/navContent.vue"
</script>

<style lang="scss" scoped>
.nav-right {
    width: calc(100vw - 200px);
    height: 100%;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    background: #f5f5f1;
    display: flex;
    flex-direction: column;
    .nav {
        height: 100%;
        width: 100%;
        display: flex;
    }
}
</style>
