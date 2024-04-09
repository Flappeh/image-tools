<template>
    <div>
        <video :srcObject="dataStream" class="source-video" autoplay v-if="selectedSource"></video>
        <div class="video-placeholder" v-else>
            Video Source
        </div>
    </div>
    </template>

<script lang="ts">
let mediaRecorder;

const recordedChunks = [];

export default {
    props:['selectedSource'],
    data() {
        return {
            videoElement: document.querySelector('.source-video') as HTMLVideoElement,
            dataStream: '' as unknown as MediaStream
        }
    },
    watch: {
        selectedSource: async function (event, oldValue) {
            const data = await event.target.value
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: false,
                video: {
                    //@ts-ignore
                    mandatory: {
                        chromeMediaSource: 'desktop',
                        chromeMediaSourceId: data,
                        minWidth: 640,
                        maxWidth: 1280,
                        minHeight: 360,
                        maxHeight: 720
                    }
                }
            })
            this.dataStream = stream;
            const options = {
                mimeType: 'video/webm; codecs=vp9'
            };
            mediaRecorder = new MediaRecorder(stream, options);
            mediaRecorder.ondataavailabile = this.handleDataAvailabile;
        }
    },
    methods: {
        handleDataAvailabile(e){
            console.log('data availabile')
            recordedChunks.push(e.data);
        }
    }
}
</script>

<style scoped>
.video-placeholder{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 480px;
    height: auto;
    aspect-ratio: 16/9;
    background-color: rgba(59, 59, 59, 0.18);
    border: 1px solid black;
}
.source-video{
    min-width:640;
    max-width:1280 ;
    max-height:360 ;
    min-height:720 ;
}
</style>