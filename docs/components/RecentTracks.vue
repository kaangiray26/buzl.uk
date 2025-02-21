<template>
    <ul>
        <li v-for="track in tracks" :key="track.name">
            <a :href="track.url" target="_blank">{{ track.name }}</a>
        </li>
    </ul>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
const tracks = ref([]);

async function load() {
    // Get recent tracks from last.fm
    const response = await fetch(
        "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=kaangiray26&limit=5&api_key=a71442723a9101d641ecb76a6bd077b3&format=json",
    ).then((res) => res.json());

    // Set the tracks
    tracks.value = response.recenttracks.track;
}

onBeforeMount(load);
</script>
