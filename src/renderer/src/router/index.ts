import { createRouter, createWebHistory } from 'vue-router'
import Home from '@renderer/views/Home.vue'
import ScreenRecorder from '@renderer/views/ScreenRecorder.vue'
import ImageConverter from '@renderer/views/ImageConverter.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/screen-recorder',
        name: 'ScreenRecorder',
        component: ScreenRecorder
    },
    {
        path: '/image-converter',
        name: 'ImageConverter',
        component: ImageConverter
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
