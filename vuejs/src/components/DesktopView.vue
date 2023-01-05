<template>
    <div class="d-flex flex-column hide-on-mobile">
        <div class="container pb-4">
            <div class="row row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 pb-4">
                <div class="col" v-for="project in projects">
                    <Project :data="project"></Project>
                </div>
            </div>
            <div class="mx-4 pb-4">
                <span class="text-white">
                    Some of the project images you see on this page are created with DALL-E by OpenAI.
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Project from './Project.vue'
import prj from '/assets/projects.json'
const projects = ref(prj.projects);
</script>