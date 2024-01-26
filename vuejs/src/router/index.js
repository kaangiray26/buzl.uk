import { createRouter, createWebHistory } from "vue-router";
import Home from "/components/Home.vue";
import Projects from "/components/Projects.vue";
import Contact from "/components/Contact.vue";
import GitHub from "/components/GitHub.vue";

const routes = [
    {
        path: "/",
        component: Home,
        meta: {
            title: 'buzl.uk'
        }
    },
    {
        path: "/projects",
        component: Projects,
        meta: {
            title: 'Projects | buzl.uk'
        }
    },
    {
        path: "/contact",
        component: Contact,
        meta: {
            title: 'Contact | buzl.uk'
        }
    },
    {
        path: "/github",
        component: GitHub,
        meta: {
            title: 'kaangiray26 (Kaan Giray Buzluk)',
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