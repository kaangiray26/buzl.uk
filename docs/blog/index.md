---
title: Blog
sidebar: false
---

# All posts

<script setup>
import { data as posts } from './posts.data.js';
console.log(posts);

// Sort posts by date
posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
</script>

<ul>
    <li v-for="post of posts">
        <a :href="post.url">{{ post.frontmatter.title }}</a>
    </li>
</ul>
