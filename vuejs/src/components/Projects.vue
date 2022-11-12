<template>
    <h1 style="color: #A8112E;font-family: 'JetBrains Mono', monospace;">Projects</h1>
    <h6 class="text-muted card-subtitle mb-2">~</h6>
    <p class="card-text" style="color: var(--text-general);font-family: Inter, sans-serif;">Publishing articles is hard,
        and it takes hell of a time.
    </p>
    <div class="container py-4">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 row-cols-xxl-6">
            <div class="col" v-for="project in projs">
                <div>
                    <a :href="project.link">
                        <img class="rounded img-fluid d-block w-100 fit-cover" :src="project.image" />
                    </a>
                    <div class="py-4">
                        <a :href="project.link">
                            <h4 class="fw-bolder" style="color: var(--text-general);">{{ project.name }}</h4>
                        </a>
                        <span class="text-muted fw-light">{{ project.description }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <p style="font-style: italic;text-decoration: underline;">All the project images you see on this page are created
        with DALL-E by OpenAI.</p>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import projects from '/assets/projects.json';

const projs = ref(projects.projects);
</script>