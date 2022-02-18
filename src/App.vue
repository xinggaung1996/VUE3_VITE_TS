<!--
 * @Description: 
 * @Version: 2.0
 * @Author: XG
 * @Date: 2021-10-05 16:37:36
 * @LastEditors: XG
 * @LastEditTime: 2022-02-18 10:45:47
-->
<template>
    <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue"
import Index from "./views/index.vue"

export default defineComponent({
    name: "App",
    components: {
        Index
    },
    setup() {}
})
</script>
<style lang="scss" scoped>
.app {
    width: 100%;
}
</style>
