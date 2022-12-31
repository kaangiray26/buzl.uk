<template>
    <div class="container hide-on-desktop pb-4">
        <div class="row row-cols-2 g-4 mb-2">
            <div class="col" v-for="project in projects.slice(0, -1)">
                <Project :data="project"></Project>
            </div>
            <div class="col-12 vh-25" v-for="project in projects.slice(-1)">
                <Project :data="project"></Project>
            </div>
        </div>
        <span class="text-decoration-underline">
            All the project images you see on this page are created with DALL-E by OpenAI.
        </span>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Project from './Project.vue'
import prj from '/assets/projects.json'
const projects = ref(prj.projects);
</script>