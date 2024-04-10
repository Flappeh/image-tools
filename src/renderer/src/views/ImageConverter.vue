<template>
    <main>
        <div id="section-wrapper">
            <section id="inputSection">
                <ImageContainer containerType="input" />
            </section>
            <section id="outputSection">
                <ImageContainer containerType="output" />
            </section>
        </div>
        <ButtonControls></ButtonControls>
    </main>
</template>

<script lang="ts">
import ButtonControls from '@renderer/components/ImageConverter/ButtonControls.vue'
import ImageContainer from '@renderer/components/ImageConverter/ImageContainer.vue'
export default {
    name: 'ImageConverter',
    components: {
        ButtonControls,
        ImageContainer
    }
}
</script>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
}
#section-wrapper {
    display: flex;
    width: 100%;
    height: 80%;
}
section {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    padding: 10px;
}
</style>
