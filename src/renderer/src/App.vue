<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
</script>

<template>
    <Sidebar />
    <router-view />
</template>
<style>
main {
    /* background-color: black; */
    overflow-y: auto;
    width: 100%;
    height: 100%;
}
</style>
