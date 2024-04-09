<template>
    <div>
        <button class="button screen-picker" name="screen-button" @click="getSources">
            <img src="@assets/icons/reload.svg" alt="">
        </button>
        <select name="source-selector" id="sourceSelect" @change="$emit('video-source', $event)" class="button">
            <option value="" selected disabled>Choose</option>
            <option :value="source.id" v-for="source in sourceList" :key="source.id" >{{ source.name }}</option>
        </select>
    </div>
    <div class="button-controls">
        <button class="button "name="record-button">Record</button>
        <button class="button "name="stop-button">Stop</button>
        <button class="button "name="save-button">Save</button>
    </div>
</template>

<script lang="ts">
import { DesktopCapturerSource} from 'electron';
let sourceList: DesktopCapturerSource[];

export default {
    name: "ButtonControls",
    data() {
        return {
            sourceList: [] as DesktopCapturerSource[],
        }
    },
    mounted() {
        console.log(sourceList)
    },
    methods: {
        async getSources() {
            this.sourceList = await window.api.getSourceList()
            console.log(this.sourceList)
        },
    }
}

</script>

<style scoped>
img{
    width: 25px;
    height: 25px;
}
select[name="source-selector"]{
    width: 500px;
}
select[name="source-selector"] option{
    width: 500px;
}
</style>
