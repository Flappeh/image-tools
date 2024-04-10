<template>
    <aside>
        <router-link to="/"><img src="@assets/icons/home.svg" alt="home-navigator" /></router-link>
        <router-link to="/screen-recorder"
            ><img src="@assets/icons/screen-record.svg" alt="screen-record-navigator"
        /></router-link>
        <router-link to="/image-converter"
            ><img src="@assets/icons/image-convert.svg" alt="home-navigator"
        /></router-link>
    </aside>
</template>

<script lang="ts">
export default {
    name: 'Sidebar'
}
</script>

<style scoped>
aside {
    min-width: 40px;
    padding: 10px;
    background-color: rgba(3, 10, 73, 0.098);
    border-right: 1px rgba(0, 0, 0, 0.447) solid;
    height: 100%;
    display: flex;
    flex-direction: column;
}
img {
    min-width: none;
    min-height: none;
    width: 50px;
    height: 50px;
}
a {
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 500;
    color: white;
}
</style>
