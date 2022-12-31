<template>
    <div class="container py-4">
        <div class="row">
            <div class="col">
                <div class="card rounded border-0">
                    <div class="card-body d-flex align-items-center justify-content-between py-2">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb p-0 m-0">
                                <li class="breadcrumb-item">
                                    <a href="https://buzl.uk">
                                        <span>
                                            <img class="img-fluid bg-dark" src="/assets/favicon.svg" width="24"
                                                height="24">
                                        </span>
                                    </a>
                                </li>
                                <li class="breadcrumb-item">
                                    <router-link to="/">Home</router-link>
                                </li>
                                <li class="breadcrumb-item">
                                    <router-link to="/subs">Subs</router-link>
                                </li>
                                <li class="breadcrumb-item">
                                    <router-link to="/contact">Contact</router-link>
                                </li>
                            </ol>
                        </nav>
                        <div class="btn-group">
                            <button class="btn btn-dark bi bi-terminal-fill" @click="emits('switchToTerminal')">
                                <span class="mx-2">Ctrl + K</span>
                            </button>
                            <button class="btn btn-dark bi"
                                :class="{ 'bi-sun-fill': mode == 'light', 'bi-moon-fill': mode == 'dark' }"
                                @click="changeMode">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const mode = ref("light");
const emits = defineEmits(['switchToTerminal']);

async function changeMode() {
    if (mode.value == "light") {
        document.getElementsByTagName("html")[0].setAttribute('data-bs-theme', 'dark')
        mode.value = "dark";
        localStorage.setItem("mode", "dark");

    } else {
        document.getElementsByTagName("html")[0].setAttribute('data-bs-theme', 'light')
        mode.value = "light";
        localStorage.setItem("mode", "light");
    }
}

onMounted(() => {
    let theme = localStorage.getItem('mode');
    if (theme == "dark") {
        mode.value = "dark";
        document.getElementsByTagName("html")[0].setAttribute('data-bs-theme', 'dark');
    } else {
        mode.value = "light";
        document.getElementsByTagName("html")[0].setAttribute('data-bs-theme', 'light')
    }
})
</script>
