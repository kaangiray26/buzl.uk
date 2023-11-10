<template>
    <div class="d-flex vh-100 vw-100">
        <div class="row g-0 w-100">
            <div class="col-auto col-sidebar">
                <Sidebar />
            </div>
            <div class="col col-main">
                <Topbar />
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup>
import Topbar from './Topbar.vue';
import Sidebar from './Sidebar.vue';
</script>