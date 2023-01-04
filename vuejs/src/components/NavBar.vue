<template>
    <div class="container py-4">
        <div class="row gx-0">
            <div class="col">
                <div class="card rounded border-0 pb-0">
                    <div class="card-body d-flex flex-column align-items-center justify-content-between p-0">
                        <nav class="navbar flex-fill flex-nowrap w-100">
                            <div class="container-fluid px-0">
                                <a href="https://buzl.uk">
                                    <img class="bg-dark" src="/assets/favicon.svg" width="38" height="38">
                                </a>
                                <div class="btn-group">
                                    <button class="btn btn-dark bi bi-terminal-fill text-nowrap"
                                        @click="emits('switchToTerminal')">
                                        <span class="mx-2">Ctrl + K</span>
                                    </button>
                                    <button class="btn btn-dark bi"
                                        :class="{ 'bi-sun-fill': mode == 'light', 'bi-moon-fill': mode == 'dark' }"
                                        @click="changeMode">
                                    </button>
                                </div>
                            </div>
                        </nav>
                        <nav class="navbar flex-fill flex-nowrap w-100">
                            <div class="container-fluid px-0">
                                <ol class="breadcrumb d-flex flex-row flex-fill p-0 m-0">
                                    <li class="breadcrumb-item text-nowrap fw-bold fs-5">
                                        <router-link to="/">Home</router-link>
                                    </li>
                                    <li class="breadcrumb-item text-nowrap fw-bold fs-5">
                                        <router-link to="/subs">Subs</router-link>
                                    </li>
                                    <li class="breadcrumb-item text-nowrap fw-bold fs-5">
                                        <router-link to="/contact">Contact</router-link>
                                    </li>
                                </ol>
                            </div>
                        </nav>
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
