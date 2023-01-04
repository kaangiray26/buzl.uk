<template>
    <div class="card h-100 rounded border-0 clickable" @click="openProject">
        <img :src="props.data.image" class="project-image rounded" :alt="props.data.name">
        <div class="card-img-overlay d-flex align-items-center bottom-text p-4">
            <div class="mt-auto">
                <div class="d-flex flex-column text-white">
                    <span class="fs-4 fw-bolder text-capitalize">{{ props.data.name }}</span>
                    <span class="hide-on-mobile">{{ props.data.description }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
async function openProject() {
    window.open(props.data.link, '_blank');
}

const props = defineProps({
    data: {
        type: Object,
        required: true
    },
})
</script>