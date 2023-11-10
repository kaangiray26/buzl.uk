<template>
    <div class="home d-flex flex-fill">
        <div class="filegrid row">
            <div class="col flex-grow-0">
                <File icon="/text-x-generic.svg" :index="0" name="README" filename="readme.md" :event="event" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import File from '/components/File.vue'

const event = ref({
    "type": null,
    "details": null
})

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