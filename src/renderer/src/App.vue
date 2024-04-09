<script setup lang="ts">
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <Sidebar />
  <router-view />
</template>
<style>

main {
    /* background-color: black; */
    height: 100vh;
    width: 100vw;
}
</style>
