<template>
    <div class="d-flex flex-column hide-on-mobile">
        <div class="container pb-4" style="height: 50vh !important;">
            <div class="row gx-4 h-100">
                <div class="col-6 h-100">
                    <Project :data="projects[0]"></Project>
                </div>
                <div class="col-6 h-100">
                    <div class="row gx-4 h-100">
                        <div class="col-12 pb-4 h-50">
                            <Project :data="projects[1]"></Project>
                        </div>
                        <div class="col-6 h-50">
                            <Project :data="projects[2]"></Project>
                        </div>
                        <div class="col-6 h-50">
                            <Project :data="projects[3]"></Project>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container pb-4">
            <div class="row row-cols-4 g-4 mb-2">
                <div class="col" v-for="project in projects.slice(4, -1)">
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
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Project from './Project.vue'
import prj from '/assets/projects.json'
const projects = ref(prj.projects);
</script>