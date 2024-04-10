<template>
    <main>
        <VideoControl :selectedSource :recording="recording" />
        <ButtonControls @video-source="handleSelectedSource" @recording="setRecord" />
    </main>
</template>

<script lang="ts">
import ButtonControls from '@renderer/components/ScreenRecorder/ButtonControls.vue'
import VideoControl from '@renderer/components/ScreenRecorder/VideoControl.vue'
export default {
    name: 'ScreenRecorder',
    components: {
        ButtonControls,
        VideoControl
    },
    data() {
        return {
            selectedSource: '',
            recording: false
        }
    },
    methods: {
        handleSelectedSource(e: Event) {
            this.selectedSource = (e.target as HTMLSelectElement).value
        },
        setRecord(e: boolean) {
            this.recording = e
        }
    }
}
</script>
<style scoped>
main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
