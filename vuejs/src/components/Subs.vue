<template>
    <div class="container pb-4">
        <div class="card rounded border-0">
            <div class="card-body">
                <h1 class="card-heading">Subdomains</h1>
                <h6 class="text-muted card-subtitle mb-2">~</h6>
                <ul class="list-group">
                    <li class="list-group-item list-group-item-action clickable" v-for="subdomain in subdomains"
                        @click="goToSubdomain(subdomain.address)">
                        <div class="row row-cols-2">
                            <div class="col-auto d-flex align-items-center">
                                <img class="img-fluid" :src="subdomain.image" width="48" height="48">
                            </div>
                            <div class="col-6">
                                <div class="d-flex flex-column">
                                    <span class="mx-2 fw-bold">{{ subdomain.name }}</span>
                                    <span class="mx-2">{{ subdomain.description }}</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import projects from '/assets/projects.json'

const subdomains = ref([]);

async function goToSubdomain(address) {
    window.open(address, "_blank");
}

onMounted(() => {
    for (let i = 0; i < projects.projects.length; i++) {
        let prj = projects.projects[i];
        if (prj.address.includes("buzl.uk")) {
            subdomains.value.push(prj)
        }
    }
})
</script>