<template>
    <div class="row g-0 d-flex justify-content-center">
        <div class="hide-on-mobile col col-6">
            <div class="container pt-2 pb-2">
                <div class="card rounded border-0 pb-0">
                    <div class="card-body p-2 rounded">
                        <nav class="navbar flex-fill flex-nowrap w-100">
                            <div class="container-fluid px-0">
                                <router-link to="/" class="hover">
                                    <img class="bg-nord4 rounded" src="/assets/logo.svg" width="38" height="38">
                                </router-link>
                                <div class="terminal-button btn-group">
                                    <button class="btn theme-btn bi bi-terminal-fill text-nowrap m-0 p-0 hover"
                                        @click="emits('switchToTerminal')">
                                    </button>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <div class="hide-on-desktop col col-12">
            <div class="container pt-2 pb-2">
                <div class="card rounded border-0 pb-0">
                    <div class="card-body p-2 rounded">
                        <nav class="navbar flex-fill flex-nowrap w-100">
                            <div class="container-fluid px-0">
                                <router-link to="/" class="hover">
                                    <img class="bg-nord4 rounded" src="/assets/logo.svg" width="38" height="38">
                                </router-link>
                                <div class="terminal-button btn-group">
                                    <button class="btn theme-btn bi bi-terminal-fill text-nowrap m-0 p-0 hover"
                                        @click="emits('switchToTerminal')">
                                    </button>
                                </div>
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
</script>
