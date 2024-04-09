<template>
    <aside>
        <router-link to="/"><img src="@assets/icons/home.svg" alt="home-navigator"></router-link>
        <router-link to="/screen-recorder"><img src="@assets/icons/screen-record.svg" alt="screen-record-navigator"></router-link>
    </aside>
</template>

<script lang="ts">
export default{
    name: "Sidebar",
    data(){

    }
}
</script>

<style scoped>
aside{
    min-width: 40px;
    padding: 10px;
    background-color: rgba(3, 10, 73, 0.098);
    border-right: 1px black solid;
    height: 100%;
    display: flex;
    flex-direction: column;
}
img{
    min-width: none;
    min-height: none;
    width: 50px;
    height: 50px;
}
a{
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 500;
    color: white;
}
</style>