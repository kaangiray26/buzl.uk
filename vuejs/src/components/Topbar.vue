<template>
    <div class="topbar">
        <div class="bi bi-layout-sidebar pe-3" data-bs-toggle="offcanvas" data-bs-target="#sidebar" aria-controls="sidebar">
        </div>
        <span>buzl.uk</span>
    </div>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="sidebar" aria-labelledby="offcanvasExampleLabel">
        <ul class="sidebar list-group">
            <li class="sidebar-item list-group-item rounded" @click="go_home">
                <div class="d-flex">
                    <span class="bi bi-house pe-2"></span>
                    <span>Home</span>
                </div>
            </li>
            <li class="sidebar-item list-group-item rounded" @click="go_projects">
                <div class="d-flex">
                    <span class="bi bi-kanban pe-2"></span>
                    <span>Projects</span>
                </div>
            </li>
            <li class="sidebar-item list-group-item rounded" @click="go_contact">
                <div class="d-flex">
                    <span class="bi bi-person-circle pe-2"></span>
                    <span>Contact</span>
                </div>
            </li>
            <hr class="text-light">
            <a href="https://github.com/kaangiray26" class="sidebar-item list-group-item rounded">
                <div class="d-flex">
                    <span class="bi bi-github pe-2"></span>
                    <span>GitHub</span>
                </div>
            </a>
        </ul>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { Offcanvas } from 'bootstrap'

const router = useRouter();

async function go_home() {
    router.push("/")
}

async function go_projects() {
    router.push("/projects")
}

async function go_contact() {
    router.push("/contact")
}
</script>