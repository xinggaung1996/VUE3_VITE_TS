<!--
 * @Description: 
 * @Version: 2.0
 * @Author: XG
 * @Date: 2021-10-05 16:37:36
 * @LastEditors: xuchaoxin
 * @LastEditTime: 2021-10-12 22:20:47
-->
<template>
    <h1>{{ msg }}</h1>
    <button @click="count++">count is: {{ count }}</button>
    <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
    <span>{{ age }}</span>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
const PropsType = {
    msg: String,
    age: {
        type: Number as PropType<Number>,
        required: true
    }
} as const
export default defineComponent({
    name: "HelloWorld",
    props: PropsType,
    data() {
        return {
            count: 0
        }
    },
    mounted() {
        this.age
    }
})
</script>
