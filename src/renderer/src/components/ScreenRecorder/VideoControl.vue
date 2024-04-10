<template>
    <div>
        <video
            v-if="selectedSource"
            id="source-video"
            ref="videoSource"
            class="source-video"
            autoplay
        ></video>
        <div v-else class="video-placeholder">Video Source</div>
    </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, watch } from 'vue'
import { Buffer } from 'buffer'
let mediaRecorder: MediaRecorder
const recordedChunks = [] as Blob[]

const props = defineProps({
    selectedSource: String,
    recording: Boolean
})

const videoSource = ref(null as unknown as HTMLVideoElement)
const selectedSourceVal = ref(props.selectedSource)

function handleDataAvailable(e) {
    console.log('data availabile')
    recordedChunks.push(e.data)
}
async function handleStop() {
    const blob = new Blob(recordedChunks, {
        type: 'video/webm; codecs=vp9'
    })
    const arrayBuffer = await blob.arrayBuffer()
    const buffer = await Buffer.from(arrayBuffer)
    try {
        console.log('opening dialog')
        const { canceled, filePath } = await window.api.showSaveDialog()
        if (canceled) return
        if (filePath) {
            await window.api.saveRecordedData(filePath, buffer)
            recordedChunks.length = 0
        }
    } catch (e) {
        console.log(e)
    }
}

watch(
    () => props.selectedSource,
    async (newValue, _) => {
        if (document.querySelector('#source-video') === null) {
            videoSource.value = document.querySelector('#source-video') as HTMLVideoElement
        }
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
                //@ts-ignore fix for mandatory
                mandatory: {
                    chromeMediaSource: 'desktop',
                    chromeMediaSourceId: newValue,
                    minWidth: 1280,
                    maxWidth: 1920,
                    minHeight: 720,
                    maxHeight: 1080,
                    frameRate: 60
                }
            }
        })
        videoSource.value.srcObject = stream
        await videoSource.value.play()
        selectedSourceVal.value = newValue
        const options = {
            mimeType: 'video/webm; codecs=vp9'
        }
        mediaRecorder = new MediaRecorder(stream, options)
        mediaRecorder.ondataavailable = handleDataAvailable
        mediaRecorder.onstop = handleStop
    }
)
watch(
    () => props.recording,
    async (newVal, _) => {
        if (newVal === true) {
            try {
                mediaRecorder.start()
            } catch (e: any) {
                console.log(e.message)
            }
        } else if (newVal === false) {
            try {
                mediaRecorder.stop()
            } catch (e: any) {
                console.log(e.message)
            }
        } else {
            console.log('stream is inactive')
        }
    }
)
</script>

<style scoped>
.video-placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 480px;
    height: auto;
    aspect-ratio: 16/9;
    background-color: rgba(59, 59, 59, 0.18);
    border: 1px solid black;
    margin-bottom: 40px;
}
.source-video {
    min-width: 640;
    max-width: 1280;
    max-height: 360;
    min-height: 720;
}
</style>
