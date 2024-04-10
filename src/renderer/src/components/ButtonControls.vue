<template>
    <div>
        <button class="button screen-picker" name="screen-button" @click="getSources">
            <img src="@assets/icons/reload.svg" alt="" />
        </button>
        <select
            id="sourceSelect"
            name="source-selector"
            class="button"
            @change="$emit('video-source', $event)"
        >
            <option value="" selected disabled>Choose</option>
            <option v-for="source in sourceList" :key="source.id" :value="source.id">
                {{ source.name }}
            </option>
        </select>
    </div>
    <div class="button-controls">
        <button class="button is-primary" name="record-button" @click="$emit('recording', true)">Record</button>
        <button class="button is-danger" name="stop-button" @click="$emit('recording', false)">Stop</button>
        <button class="button" name="save-button">Save</button>
    </div>
</template>

<script lang="ts">
import { DesktopCapturerSource } from 'electron'
let sourceList: DesktopCapturerSource[]

export default {
    name: 'ButtonControls',
    emits: ['video-source', 'recording'],
    data() {
        return {
            sourceList: [] as DesktopCapturerSource[]
        }
    },
    mounted() {
        console.log(sourceList)
    },
    methods: {
        async getSources() {
            this.sourceList = await window.api.getSourceList()
            console.log(this.sourceList)
        }
    }
}
</script>

<style scoped>
.button-controls {
    gap: 10px;
    display: flex;
}
img {
    width: 25px;
    height: 25px;
}
select[name='source-selector'] {
    width: 500px;
}
select[name='source-selector'] option {
    width: 500px;
}
</style>
