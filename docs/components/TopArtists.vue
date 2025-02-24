<template>
    <ul>
        <li v-for="artist in artists" :key="artist.name">
            <a :href="artist.url" target="_blank">{{ artist.name }}</a>
        </li>
    </ul>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
const artists = ref([]);

async function load() {
    // Get top artists from last.fm
    const response = await fetch(
        "https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=kaangiray26&period=7day&limit=5&api_key=a71442723a9101d641ecb76a6bd077b3&format=json",
    ).then((res) => res.json());

    // Set the artists
    artists.value = response.topartists.artist;
}

onBeforeMount(load);
</script>
