<template>
    <header>
        <a class="title" href="/">
            <h1>
                buzl.uk
            </h1>
        </a>
        <nav>
            <p>
                <router-link to="/">Home</router-link>
                <router-link to="/gallery">Gallery</router-link>
                <router-link to="/contact">Contact</router-link>
            </p>
        </nav>
    </header>
    <main>
        <router-view></router-view>
    </main>
    <footer style="padding:25px 0;">
        <span>
            Support <a href="https://bearblog.dev">Bear ʕ•ᴥ•ʔ</a>
        </span>
    </footer>
</template>