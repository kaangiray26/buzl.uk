<template>
    <div class="d-flex flex-column theme-color theme-bg">
        <NavBar @switch-to-terminal="show_terminal" />
        <router-view></router-view>
    </div>
    <Terminal ref="thisTerminal" />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import NavBar from './NavBar.vue'
import Terminal from './Terminal.vue'

const thisTerminal = ref(null)

async function show_terminal() {
    thisTerminal.value.show();
}

async function keyPress(event) {
    if (event.target.tagName != 'INPUT' && event.target.tagName != 'TEXTAREA' && event.ctrlKey && event.key == 'k') {
        event.preventDefault();
        show_terminal();
        return;
    }
}

onMounted(() => {
    window.addEventListener('keydown', keyPress);
})
</script>