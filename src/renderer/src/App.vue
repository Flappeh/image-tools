<script setup lang="ts">
import Versions from './components/Versions.vue'
import ButtonControls from './components/ButtonControls.vue';
const ipcHandle = () => window.electron.ipcRenderer.send('ping')
</script>

<template>
  <ButtonControls />
  <Versions />
</template>
