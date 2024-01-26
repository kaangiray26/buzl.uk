<template>
    <ul class="sidebar list-group">
        <li class="list-group-item bg-transparent border-0 text-light mb-2">
            <div class="d-flex justify-content-center">
                <span>buzl.uk</span>
            </div>
        </li>
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
        <hr class="text-light my-1">
        <li class="sidebar-item list-group-item rounded" @click="go_github">
            <div class="d-flex">
                <span class="bi bi-github pe-2"></span>
                <span>GitHub</span>
            </div>
        </li>
        <!-- <a href="https://github.com/kaangiray26" class="sidebar-item list-group-item rounded">
            <div class="d-flex">
                <span class="bi bi-github pe-2"></span>
                <span>GitHub</span>
            </div>
        </a> -->
    </ul>
</template>

<script setup>
import { useRouter } from 'vue-router';

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

async function go_github() {
    router.push("/github")
}
</script>