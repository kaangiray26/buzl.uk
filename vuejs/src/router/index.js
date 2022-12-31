import { createRouter, createWebHistory } from "vue-router";
import Home from "/components/Home.vue";
import Subs from "/components/Subs.vue";
import Contact from "/components/Contact.vue";

const routes = [
    {
        path: "/",
        component: Home,
        meta: {
            title: 'buzl.uk'
        }
    },
    {
        path: "/subs",
        component: Subs,
        meta: {
            title: 'buzl.uk | Subs'
        }
    },
    {
        path: "/contact",
        component: Contact,
        meta: {
            title: 'buzl.uk | Contact'
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

export default router