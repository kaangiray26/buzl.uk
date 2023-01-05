<template>
    <div class="container py-4">
        <div class="list-group list-group-flush m-4">
            <li class="list-group-item d-flex justify-content-between" v-for="subdomain in subdomains">
                <div>
                    <span>{{ subdomain }}</span>
                </div>
                <div>
                    <img alt="Website"
                        :src="'https://img.shields.io/website?down_color=red&down_message=Offline&up_color=green&up_message=Online&url=https://' + subdomain">
                </div>
            </li>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const subdomains = ref([
    "allesgut.buzl.uk",
    "capisce.buzl.uk",
    "dalgasina.buzl.uk",
    "deezer.buzl.uk",
    "fakeai.buzl.uk",
    "forte.buzl.uk",
    "games.buzl.uk",
    "git.buzl.uk",
    "pixel.buzl.uk",
    "red.buzl.uk",
    "share.buzl.uk",
    "sudoku.buzl.uk",
    "sync.buzl.uk",
    "tracker.buzl.uk",
    "notes.buzl.uk",
    "gokce.buzl.uk",
    "home.buzl.uk"
])

onMounted(() => {
    subdomains.value.sort();
})
</script>