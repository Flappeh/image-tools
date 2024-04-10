<template>
    <div>
        <p class="button">Convert to</p>
        <select name="outputSelector" id="outputSelect" class="button">
            <option value="png">PNG</option>
            <option value="jpeg">JPEG</option>
            <option value="webm">WEBM</option>
        </select>
    </div>
</template>

<script lang="ts">
export default {
    name: 'ButtonControls',
    data() {
        return {
            inputType: '',
            outputType: ''
        }
    }
}
</script>
