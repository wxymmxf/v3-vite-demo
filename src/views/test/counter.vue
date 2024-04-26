<script setup>
import {useCounterStore} from "@/store/module/counter";
const counter = useCounterStore()
</script>

<template>
  <div>dashboard:{{counter.num}}</div>
  <div><el-button type="primary" @click="counter.inc()">inc</el-button></div>

</template>
