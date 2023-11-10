<template>
    <div class="home d-flex flex-fill">
        <div class="filegrid row">
            <div v-for="(proj, index) in projs" class="col flex-grow-0">
                <File icon="/x-office-document.svg" :index="index" :name="proj.name" :filename="proj.filename"
                    :event="event" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import File from '/components/File.vue'
import projects from '/assets/projects.json';

const event = ref({
    "type": null,
    "details": null
})
const projs = ref(projects.items)

onMounted(() => {
    window.addEventListener('click', (ev) => {
        // File clicked
        if ([...ev.target.classList].includes('item')) {
            event.value.type = "file";
            event.value.details = ev.target.attributes.index.value;
            return
        }

        // Outside clicked
        event.value.type = "outside";
        event.value.details = null;
        return
    })
})
</script>