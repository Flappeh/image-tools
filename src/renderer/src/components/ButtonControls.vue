<template>
    <button class="screen-picker" name="screen-button" @click="save">
        Choose Screen
    </button>
    <div class="button-controls">
        <button name="record-button">Record</button>
        <button name="stop-button">Stop</button>
        <button name="save-button">Save</button>
    </div>
</template>

<script setup lang="ts">
const ipcHandle = () => window.electron.ipcRenderer.send('ping')

const screenButton = document.querySelector('#screen-button')
const recordButton = document.querySelector('#record-button')
const stopButton = document.querySelector('#stop-button')
const saveButton = document.querySelector('#save-button')

const save = async () => {
    await window.electron.ipcRenderer.invoke('screen-pick', 'hellos')
}


</script>

<style scoped></style>
