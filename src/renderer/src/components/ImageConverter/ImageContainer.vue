<template>
    <div>This is the image container for : {{ imageType }}</div>
</template>

<script lang="ts">
export default {
    name: 'ImageContainer',
    props: {
        containerType: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            image: [],
            imageType: ''
        }
    },
    mounted() {
        if (this.containerType === 'input') {
            this.imageType = 'input'
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
</style>
