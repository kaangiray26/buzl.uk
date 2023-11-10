<template>
    <div class="item" :index="index" :class="{ 'item-selected': item_selected }" @click="item_select" @dblclick="open">
        <img class="file" :src="icon">
        <span class="filename text-center text-white">{{ name }}.md</span>
    </div>
    <div v-if="viewer" class="viewer d-flex shadow" :style="{ 'top': top + 'px', 'left': left + 'px' }">
        <div class="v-container d-flex flex-column" :maximize="maximize">
            <!-- Topbar -->
            <div class="v-static d-flex bg-dark align-items-center border rounded-top-1 p-1" draggable="true"
                @dragstart="dragstart" @dragend="dragend" :maximize="maximize">
                <div class="d-flex flex-fill justify-content-start text-truncate">
                    <span class="text-light text-start text-nowrap">{{ name }}.md</span>
                </div>
                <div class="d-none d-sm-flex">
                    <button class="btn-window bi bi-square" @click="fullscreen"></button>
                </div>
                <div>
                    <button class="btn-window bi bi-x-lg" @click="close"></button>
                </div>
            </div>
            <!-- Content -->
            <div class="v-dynamic d-flex flex-column flex-fill bg-light rounded-bottom-1">
                <div v-html="content" class="viewer-content p-3" :maximize="maximize"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import Showdown from 'showdown'
const props = defineProps({
    icon: String,
    name: String,
    index: Number,
    event: Object,
    filename: String,
})

const viewer = ref(false)
const content = ref(null)
const item_selected = ref(false)
const maximize = ref(false)

const top = ref(0)
const left = ref(0)

const before_maximize_top = ref(0)
const before_maximize_left = ref(0)

const drag_x = ref(0)
const drag_y = ref(0)

async function fullscreen() {
    if (maximize.value) {
        top.value = before_maximize_top.value;
        left.value = before_maximize_left.value;
    } else {
        before_maximize_top.value = top.value;
        before_maximize_left.value = left.value;
        top.value = 0;
        left.value = 0;
    }

    maximize.value = !maximize.value
}

async function dragstart(ev) {
    drag_x.value = ev.clientX;
    drag_y.value = ev.clientY;
}

async function dragend(ev) {
    ev.preventDefault();
    let rect = ev.target.getBoundingClientRect();

    let offset_x = ev.clientX - drag_x.value;
    let offset_y = ev.clientY - drag_y.value;

    if (rect.top + offset_y < 0) {
        top.value = 0;
    } else {
        top.value += offset_y;
    }

    left.value += offset_x;
}

async function item_select() {
    item_selected.value = true;
}

async function open() {
    // Get the contents of the file
    let response = await fetch("/files/" + props.filename)
        .then(res => res.text())

    // Set the contents of the file
    let converter = new Showdown.Converter();
    content.value = converter.makeHtml(response)
    viewer.value = true;
}

async function close() {
    viewer.value = false;
    top.value = 0;
    left.value = 0;
}

watch(() => props.event, (event, _) => {
    if (event.type == "outside") {
        item_selected.value = false;
        return
    }

    if (event.type == "file" && event.details != props.index) {
        item_selected.value = false;
        return
    }
}, {
    deep: true
})
</script>