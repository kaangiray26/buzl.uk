---
sidebar: false
prev: false
next: false
---

# Gallery

These are some of my favourite photographs. All of them are free to use. Attribution is not required. However, it is always appreciated. Also, don’t use them for commercial purposes.

Images displayed here are dithered to reduce the file size. Click on the image to view the original.

<script setup>
import images from './images.js';

function open_image(img){
    const url = `https://kaangiray26.github.io/images/${img.src}.${img.ext}`;
    window.open(url, '_blank');
}
</script>

<div :class="$style.gallery">
    <div v-for="image in images" :key="image.src" @click="open_image(image)">
        <img :src="`https://kaangiray26.github.io/images/${image.src}-dithered.png`">
    </div>
</div>

<style module>
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
}

.gallery img {
    cursor: pointer;
}
</style>
