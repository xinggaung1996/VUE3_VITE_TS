<!--
 * @Description: 
 * @Version: 2.0
 * @Author: XG
 * @Date: 2021-10-05 16:37:36
 * @LastEditors: xuchaoxin
 * @LastEditTime: 2021-11-22 13:28:35
-->
<template>
    <HelloWorld msg="Hello Vue 3.0 + Vite + TS + ESLint" :age="12" />
    <div class="demo">
        <span>333</span>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import HelloWorld from "./components/HelloWorld.vue"

interface Config {
    name: string
}

export default defineComponent({
    name: "App",
    props: {
        config: {
            type: Object as PropType<Config>,
            required: true
        }
    },
    components: {
        HelloWorld
    },
    mounted() {
        this.config
    },
    computed: {},
    data() {
        return {
            name: "xg"
        }
    },
    methods: {
        testFun() {
            console.log("333")
        }
    }
})
</script>
<style scoped>
.demo {
    width: 100%;
}
.demo span {
    color: red;
}
</style>
