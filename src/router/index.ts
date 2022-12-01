import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue'
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/admin',
        component: () => import('../views/Admin.vue'),
        meta: { layout: 'AppLayoutAdmin' }
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
