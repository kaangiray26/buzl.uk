<template>
    <div class="home-light d-flex flex-fill">
        <div v-if="loaded" class="row flex-fill">
            <div class="col-auto github-sidebar">
                <div class="d-flex flex-column px-3">
                    <img :src="data.avatar_url" alt="Profile Image" class="rounded-circle" width="260" height="260">
                    <div class="d-flex flex-column py-3">
                        <span class="fw-bold">{{ data.name }}</span>
                        <span class="text-muted">{{ data.login }}</span>
                    </div>
                    <button class="btn btn-light border border-secondary btn-sm mb-3">Follow</button>
                    <p class="font-monospace">{{ data.bio }}</p>
                    <p class="d-flex">
                        <span class="bi bi-people-fill me-1"></span>
                        <span class="fw-bold me-1">{{ data.followers }} </span>
                        <span class="text-muted">followers</span>
                        <span class="mx-1">·</span>
                        <span class="fw-bold me-1">{{ data.following }} </span>
                        <span class="text-muted">following</span>
                    </p>
                    <div class="d-flex">
                        <span class="bi bi-geo-alt-fill me-1"></span>
                        <span>{{ data.location }}</span>
                    </div>
                    <div>
                        <span class="bi bi-link-45deg me-1"></span>
                        <span>{{ data.blog }}</span>
                    </div>
                </div>
            </div>
            <div class="col"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from 'vue'

const loaded = ref(false)

// GitHub Data
const data = ref({})

async function get_data() {
    const response = await fetch('https://api.github.com/users/kaangiray26')
    data.value = await response.json()
    console.log(data.value)

    // Set loaded
    loaded.value = true
}

onBeforeMount(() => {
    get_data()
})
</script>