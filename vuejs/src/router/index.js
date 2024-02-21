import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Gallery from '../components/Gallery.vue';
import Contact from '../components/Contact.vue';

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/gallery",
        component: Gallery
    },
    {
        path: "/contact",
        component: Contact
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    }
});

export default router