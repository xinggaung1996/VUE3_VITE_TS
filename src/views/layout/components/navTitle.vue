<!--
 * @Description: 
 * @Version: 2.0
 * @Author: Do not edit
 * @Date: 2022-02-09 14:07:12
 * @LastEditors: XG
 * @LastEditTime: 2022-02-18 10:44:56
-->
<template>
    <div class="nav-title">
        <div class="title-mod">
            <div
                class="mod-row point"
                v-for="item in 6"
                @click="selectItem(item)"
                :class="selectIndex === item ? 'selectBg3' : ''"
            >
                item
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"
const selectIndex = ref(1)
const selectItem = (val: number) => {
    selectIndex.value = val
}
</script>
<style lang="scss" scoped>
.nav-title {
    width: 300px;
    height: 100%;
    box-sizing: border-box;
    border-right: 1px solid #dbd9d9;
    padding: 10px;
    .title-mod {
        display: flex;
        flex-direction: column;
        .mod-row {
            height: 60px;
            width: 100%;
            border-radius: 5px;
            box-sizing: border-box;
            border-bottom: 1px solid #dbd9d9;
            padding: 10px 20px;
        }
    }
}
</style>
