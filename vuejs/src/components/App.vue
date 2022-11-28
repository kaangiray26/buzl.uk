<template>
    <div class="row g-0 d-flex justify-content-center w-100 h-100">
        <div class="col-12 col-lg-4 col-xl-4 col-xxl-4 p-2">
            <div class="card border-dark border rounded shadow-lg" style="background: var(--card-background);">
                <div class="card-body border-0 shadow-none">
                    <ol class="breadcrumb border rounded border-dark shadow-lg flex-fill mb-4"
                        style="background: var(--background-color);border-style: none;">
                        <li class="breadcrumb-item">
                            <a href="https://buzl.uk">
                                <span>
                                    <img class="img-fluid" src="/assets/favicon.svg" width="24" height="24"
                                        alt="Favicon" />
                                </span>
                            </a>
                        </li>
                        <li class="breadcrumb-item">
                            <router-link to="/"><span style="font-size: 18px;color: var(--text-general);">Home</span>
                            </router-link>
                        </li>
                        <li class="breadcrumb-item">
                            <router-link to="/projects"><span
                                    style="font-size: 18px;color: var(--text-general);">Projects</span></router-link>
                        </li>
                        <li class="breadcrumb-item">
                            <router-link to="/contact"><span
                                    style="font-size: 18px;color: var(--text-general);">Contact</span></router-link>
                        </li>
                    </ol>
                    <router-view />
                </div>
            </div>
            <Terminal />
        </div>
    </div>
</template>

<script setup>
import Terminal from '/components/Terminal.vue';
</script>