<template>
    <div>
        <video v-if="selectedSource" :srcObject="dataStream" class="source-video" autoplay></video>
        <div v-else class="video-placeholder">Video Source</div>
        <button @click="printChunks">asd</button>
    </div>
</template>

<script lang="ts">
let mediaRecorder: MediaRecorder

const recordedChunks: Blob[] = []

export default {
    props: {
        selectedSource: String,
        recording: Boolean
    },
    data() {
        return {
            videoElement: document.querySelector('.source-video') as HTMLVideoElement,
            dataStream: '' as unknown as MediaStream
        }
    },
    watch: {
        selectedSource: async function (data, _) {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: false,
                video: {
                    //@ts-ignore fix for mandatory
                    mandatory: {
                        chromeMediaSource: 'desktop',
                        chromeMediaSourceId: data,
                        minWidth: 640,
                        maxWidth: 1280,
                        minHeight: 360,
                        maxHeight: 720,
                        frameRate: 60
                    }
                }
            })
            this.videoElement = await document.querySelector('.source-video') as HTMLVideoElement;
            this.dataStream = stream
            await this.videoElement.play()
            const options = {
                mimeType: 'video/webm; codecs=vp9'
            }
            mediaRecorder = new MediaRecorder(this.dataStream, options)
            mediaRecorder.ondataavailable = this.handleDataAvailabile
            mediaRecorder.onstop = this.handleStop
        },
        // recording: async function (newVal, _) {
        //     if (newVal === true && this.dataStream.active) {
        //         try {
        //         } catch (e: any) {
        //             console.log(e.message)
        //         }
        //     } else if (newVal === false) {
        //         try {
        //         } catch (e: any) {
        //             console.log(e.message)
        //         }
        //     } else {
        //         console.log('stream is inactive')
        //     }
        // }
    },
    methods: {
        handleDataAvailabile(e: BlobEvent) {
            console.log('data availabile')
            recordedChunks.push(e.data)
        },
        async handleStop(_e: Event) {
            const blob = new Blob(recordedChunks, {
                type: 'video/webm ;codecs=vp9'
            })
            try {
                const buffer = Buffer.from(await blob.arrayBuffer())
                console.log('stopped')
                // await window.api.saveRecordedData(buffer)
            } catch (e) {
                console.log(e)
            }
        },
        printChunks(){
            console.log(recordedChunks)
        }
    }
}
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
}
.source-video {
    min-width: 640;
    max-width: 1280;
    max-height: 360;
    min-height: 720;
}
</style>
_oldValue_newVal_e
