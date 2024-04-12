<template>
    <div
        ref="divElement"
        :data-active="active"
        @drop.prevent="onDrop"
        @dragenter.prevent="setActive"
        @dragover.prevent="setActive"
        @dragleave.prevent="setInactive"
    >
        <slot :dropZoneActive="active" class="drop-slot">
            <span>
                <p>Drop your image here or</p>
                <a href="" @click="openImageDialog">Choose file</a>
            </span>
        </slot>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
    name: 'ImageContainer',
    props: {
        containerType: {
            type: String,
            required: true
        }
    },
    emits: ['files-dropped'],
    setup() {
        const events = ['dragenter', 'dragover', 'dragleave', 'drop ']
        const active = ref(false)
        const divElement = ref(null as unknown as HTMLElement)
        return {
            events,
            active,
            divElement
        }
    },
    data() {
        return {
            image: [],
            imageType: ''
        }
    },
    mounted() {
        this.events.forEach((event) => {
            document.body.addEventListener(event, this.preventDefaults)
        })
        if (this.containerType === 'input') {
            this.imageType = 'input'
        }
    },
    unmounted() {
        this.events.forEach((e) => {
            document.body.removeEventListener(e, this.preventDefaults)
        })
    },
    methods: {
        onDrop(e) {
            this.$emit('files-dropped', [...e.dataTransfer.files])
        },
        preventDefaults(e) {
            e.preventDefault()
        },
        setActive() {
            this.active = true
            this.divElement.classList.add('active-hover')
        },
        setInactive() {
            this.active = false
            this.divElement.classList.remove('active-hover')
        },
        isActiveClass() {
            if (this.active) {
                return 'active-hover'
            } else {
                return ''
            }
        },
        async openImageDialog() {
            const { canceled, filePaths } = await window.api.showInputDialog()
            if (canceled) {
                console.log('canceled')
                return
            }
            if (filePaths) {
                console.log(filePaths)
            }
        }
    }
}
</script>

<style scoped>
div {
    background-color: rgba(128, 128, 128, 0.285);
    height: 90%;
    width: auto;
    aspect-ratio: 1;
    align-items: center;
    justify-content: center;
    display: flex;
    border: 3px black dashed;
}

.active-hover {
    background-color: blue;
}
</style>
