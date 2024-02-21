<template>
    <div>
        <h2 id="gallery">gallery</h2>
        <p>These are some of my favourite photographs. All of them are free to use. Attribution is not required. However, it
            is always appreciated. Also, don't use them for commercial purposes.
        </p>
        <p>
            <strong>Images displayed here are dithered to reduce the file size. Click on the image to toggle
                dithering.</strong>
        </p>
        <div class="img-container" v-for="item in items" @click="toggle_dithering(item)">
            <img :src="get_image(item)">
            <img v-if="item.dither" src="/dither.svg" class="dither">
        </div>
        <button @click="scroll_to_top">Scroll to top</button>
    </div>
</template>

<style>
.img-container {
    display: flex;
    position: relative;
    cursor: pointer;
    margin-bottom: 1rem;
}

.dither {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50px;
    height: 50px;
    background-color: white;
    margin: 1rem;
}
</style>

<script setup>
import { ref } from 'vue'

const items = ref([
    {
        "src": "0013_10.jpg",
        "dither": true
    },
    {
        "src": "0017_16.jpg",
        "dither": true
    },
    {
        "src": "93680029.JPG",
        "dither": true
    },
    {
        "src": "0017_14.jpg",
        "dither": true
    },
    {
        "src": "0020_17.jpg",
        "dither": true
    },
    {
        "src": "0024_21.jpg",
        "dither": true
    },
    {
        "src": "0015_12.jpg",
        "dither": true
    },
    {
        "src": "0027_24.jpg",
        "dither": true
    },
    {
        "src": "0008_7.jpg",
        "dither": true
    },
    {
        "src": "0022_19.jpg",
        "dither": true
    },
    {
        "src": "0017_13A.jpg",
        "dither": true
    },
    {
        "src": "0009_6.jpg",
        "dither": true
    },
    {
        "src": "0039_36A.jpg",
        "dither": true
    },
    {
        "src": "0023_19A.jpg",
        "dither": true
    },
    {
        "src": "0017_15.jpg",
        "dither": true
    },
    {
        "src": "0028_25.jpg",
        "dither": true
    },
    {
        "src": "0020_17A.jpg",
        "dither": true
    },
    {
        "src": "0037_34A.jpg",
        "dither": true
    },
    {
        "src": "0009_7.jpg",
        "dither": true
    },
    {
        "src": "0035_32.jpg",
        "dither": true
    },
    {
        "src": "0011_8.jpg",
        "dither": true
    },
    {
        "src": "93680011.JPG",
        "dither": true
    },
    {
        "src": "0018_15.jpg",
        "dither": true
    },
    {
        "src": "0039_35A.jpg",
        "dither": true
    },
    {
        "src": "0038_34A.jpg",
        "dither": true
    },
    {
        "src": "0016_13.jpg",
        "dither": true
    },
    {
        "src": "0030_27.jpg",
        "dither": true
    },
    {
        "src": "0012_9.jpg",
        "dither": true
    },
    {
        "src": "0010_7.jpg",
        "dither": true
    }
])

async function toggle_dithering(item) {
    item.dither = !item.dither;
}

async function scroll_to_top() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function get_image(item) {
    if (!item.dither) return "https://kaangiray26.github.io/images/" + item.src;

    const filename = item.src.split(".")[0] + '-dithered.png';
    return "https://kaangiray26.github.io/images/" + filename;
}
</script>