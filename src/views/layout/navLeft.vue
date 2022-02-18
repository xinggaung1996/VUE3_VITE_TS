<!--
 * @Description:
 * @Author: ZY
 * @Date: 2021-01-14 09:11:22
 * @LastEditors: XG
 * @LastEditTime: 2022-02-18 10:44:19
-->

<template>
    <div class="nav-left bg-l2">
        <div class="H50 title"></div>
        <div class="List">
            <span class="textTitle">备忘录</span>
            <div class="ListMod">
                <div
                    class="mod point"
                    :class="item === selectIndex ? 'selectFont selectBg' : ''"
                    v-for="item in 8"
                    :key="item"
                    @click="selectItem(item)"
                >
                    <div class="icon">1111</div>
                    <div class="text">{{ item }}</div>
                    <div class="number">45</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue"

export default defineComponent({
    components: {},
    setup() {
        const state = reactive({
            selectIndex: 1,
            showImageUpload: false,
            image: "https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191",
            params: { someParams: "your_params_goes_here" },
            headers: { smail: "*_~" }
        })
        const stateAsRefs = toRefs(state)
        const selectItem = (val: number) => {
            state.selectIndex = val
        }
        const onCropUploadSuccess = (jsonData: any, field: string) => {
            state.showImageUpload = false
            state.image = jsonData.files[field]
        }
        const onClose = () => {
            state.showImageUpload = false
        }
        return {
            selectItem,
            onCropUploadSuccess,
            onClose,
            ...state,
            ...stateAsRefs
        }
    }
})
</script>

<style lang="scss" scoped>
.nav-left {
    width: 200px;
    height: 100%;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    box-sizing: border-box;
    padding: 0px 12px;
    .title {
        text-align: center;
        line-height: 50px;
    }
    .List {
        .textTitle {
            padding: 0px 10px;
        }
        .ListMod {
            display: flex;
            flex-direction: column;
            .mod {
                padding: 0px 10px;
                height: 30px;
                line-height: 30px;
                display: flex;
                border-radius: 3px;
                .icon {
                    padding-right: 10px;
                }
                .text {
                    width: 100%;
                }
                .number {
                    padding-left: 10px;
                }
            }
        }
    }
}
</style>
