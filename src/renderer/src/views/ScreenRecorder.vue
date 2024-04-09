<template>
    <main>
        <VideoControl :selectedSource/>
        <ButtonControls @video-source="selectedSource = $event"/>
    </main>
</template>

<script lang="ts">
import ButtonControls from '@renderer/components/ButtonControls.vue';
import VideoControl from '@renderer/components/VideoControl.vue';
export default{
    name: "ScreenRecorder",
    components: {
        ButtonControls,
        VideoControl
    },
    data(){
        return{
            selectedSource: undefined as unknown as Event,
        }
    }
}
</script>
<style scoped>
main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
}

</style>