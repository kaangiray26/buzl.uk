<template>
    <div class="card h-100 w-100 border-0">
        <div class="p-0">
            <div class="clickable-shadow rounded" @click="openProject">
                <div>
                    <img class="img-fluid placeholder-img rounded bg-img" :src="props.data.image" @error="placeholder" />
                </div>
            </div>
            <div class="d-flex flex-fill">
                <h6 class="color-nord4 fw-bold text-break text-wrap clickable p-2 ps-0">
                    {{ props.data.name }}
                </h6>
            </div>
        </div>
    </div>

    <!-- <div class="hide-on-mobile card rounded-0 clickable mx-4" @click="openProject">
        <img :src="props.data.image" class="project-image img-thumbnail" :alt="props.data.name">
        <div class="card-img-overlay rounded-0 d-flex align-items-center bottom-text p-4">
            <div class="mt-auto">
                <div class="d-flex flex-column text-white">
                    <span class="fs-4 fw-bolder text-capitalize">{{ props.data.name }}</span>
                    <span class="hide-on-mobile">{{ props.data.description }}</span>
                </div>
            </div>
        </div>
    </div>
    <div class="hide-on-desktop card rounded-0 clickable mx-4" @click="openProject">
        <img :src="props.data.image" class="project-image img-thumbnail" :alt="props.data.name">
        <div class="card-img-overlay rounded-0 d-flex align-items-center bottom-text p-4">
            <div class="mt-auto">
                <div class="d-flex flex-column text-white">
                    <span class="fs-4 fw-bolder text-capitalize">{{ props.data.name }}</span>
                    <span class="hide-on-mobile">{{ props.data.description }}</span>
                </div>
            </div>
        </div>
    </div>
    <div class="mx-4 mb-4 hide-on-desktop">
        <span>{{ props.data.description }}</span>
    </div> -->
</template>

<script setup>

function placeholder(event) {
    //
}

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