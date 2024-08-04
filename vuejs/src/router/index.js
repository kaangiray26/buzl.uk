import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Gallery from "../components/Gallery.vue";
import Contact from "../components/Contact.vue";
import Now from "../components/Now.vue";
import Links from "../components/Links.vue";

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/gallery",
        component: Gallery,
    },
    {
        path: "/contact",
        component: Contact,
    },
    {
        path: "/now",
        component: Now,
    },
    {
        path: "/links",
        component: Links,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 };
    },
});

export default router;
