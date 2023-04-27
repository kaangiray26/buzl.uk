<template>
    <div class="row g-0 d-flex justify-content-center">
        <div class="hide-on-mobile col-6">
            <div class="container pb-4">
                <div class="card border-0">
                    <div class="card-body p-2 rounded">
                        <div class="row g-3">
                            <div class="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2" v-for="project in projects">
                                <Project :data="project"></Project>
                            </div>
                        </div>
                        <hr>
                        <div>
                            <span class="color-nord4">
                                Some of the project images you see on this page are created with DALL-E by OpenAI.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hide-on-desktop col-12">
            <div class="container pb-4">
                <div class="card border-0">
                    <div class="card-body p-2 rounded">
                        <div class="row g-3">
                            <div class="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2" v-for="project in projects">
                                <Project :data="project"></Project>
                            </div>
                            <hr>
                            <div>
                                <span class="color-nord4">
                                    Some of the project images you see on this page are created with DALL-E by OpenAI.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
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