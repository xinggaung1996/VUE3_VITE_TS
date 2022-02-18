<!--
 * @Description: 
 * @Version: 2.0
 * @Author: Do not edit
 * @Date: 2022-02-08 19:47:29
 * @LastEditors: XG
 * @LastEditTime: 2022-02-18 10:44:45
-->
<template>
    <div class="top-bar H50">
        <div class="bar-title">
            <div
                class="bar-box hoverBg2 point"
                @click="selectBox(111)"
                :class="selectIndex === 111 ? 'selectBg2' : ''"
            >
                111
            </div>
            <div
                class="bar-box hoverBg2 point"
                @click="selectBox(222)"
                :class="selectIndex === 222 ? 'selectBg2' : ''"
            >
                222
            </div>
            <div
                class="bar-box hoverBg2 point"
                @click="selectBox(333)"
                :class="selectIndex === 333 ? 'selectBg2' : ''"
            >
                333
            </div>
        </div>
        <div
            class="bar-box hoverBg2 point"
            @click="selectBox(444)"
            :class="selectIndex === 444 ? 'selectBg2' : ''"
        >
            444
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue"

const selectIndex = ref<number>(111)
const state = reactive({
    selectIndexs: 111,
    index: 11
})
const selectBox = (val: number) => {
    selectIndex.value = val
    state.selectIndexs = val
    state.index = val
}
</script>
<style lang="scss" scoped>
.top-bar {
    box-sizing: border-box;
    display: flex;
    padding: 3px 0px;
    border-bottom: 1px solid #dbd9d9;
    .bar-title {
        display: flex;
        width: 300px;
        box-sizing: border-box;
        border-right: 1px solid #dbd9d9;
    }
    .bar-box {
        width: 44px;
        height: 44px;
        margin: 0px 2px;
        line-height: 44px;
        border-radius: 3px;
        text-align: center;
    }
}
</style>
