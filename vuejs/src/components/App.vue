<template>
    <NavBar @switch-to-terminal="switch_to_terminal" />
    <router-view></router-view>
    <Terminal ref="thisTerminal" />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import NavBar from './NavBar.vue'
import Terminal from './Terminal.vue'

const thisTerminal = ref(null)

async function switch_to_terminal() {
    thisTerminal.value.show()
}
</script>