<template>
    <div class="container pb-4">
        <div class="card rounded border-0 m-4">
            <div class="card-body px-0">
                <h1 class="card-heading">buzl.uk</h1>
                <h6 class="text-muted card-subtitle mb-2">~</h6>
                <p class="card-text">
                    My name is Kaan Giray Buzluk. I am a computer science student at RWTH Aachen and I've been coding
                    for over 8 years. Here's a showcase of my projects.</p>
                <router-link class="show-pages fw-bold clickable text-decoration-underline"
                    to="/contact">Contact</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Collapse } from 'bootstrap'
</script>