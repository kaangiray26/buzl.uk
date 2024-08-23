---
layout: post
title: migrating my website
author: kaangiray26
tags: [jekyll, github pages, bear blog]
---

That time of the year has come again. I need to change my website, add some silly features, and remove some necessary ones. Until now, I was using Vue.js and GitHub Pages to build and host my website. But it was too exhausting to maintain the website and write new posts because I needed to build the website myself every time I make a change in the code. Besides, I had to deal with HTML and this prevented me from writing new posts frequently. So, I decided to migrate my website to Jekyll as, I can't stress this enough, I **LOVE 😍** writing in Markdown. If god wanted to send some sacred text to the earth in the 21st century, he would definitely choose Markdown. Anyway, let's see how it went.

### transferring stuff
Actually, there was nothing particular to do. Only things I had were some javascript script in my gallery page to toggle dithering of the images and routing of the pages. I copied the static assets and did some tinkering with [Liquid](https://shopify.github.io/liquid/) and javascript to make the same functions work in Jekyll.

Images were also no problem because I was already using a GitHub repository to store them (plz don't tell anyone). Jekyll also offers pagination through a plugin called `jekyll-paginate` which I used to paginate my posts.

### hosting
Again, GitHub Pages comes to the rescue. However, this time I set up a GitHub Action workflow to build the website and publish it each time I push a commit to the repository. This way, I can just write some new stuff from my phone and push it to the repository just to forget about it.

Oh, I almost forgot how I ripped off the styling from Bear Blog (I'm sorry but I love the simplicity of it). I just copied the CSS and added some extra classes to suit my needs. Please check out [Bear Blog](https://bearblog.dev) and support them. [Herman](https://herman.bearblog.dev/) is doing a great job.

Well, that's it. Don't wonder too much how it looks like because you are already looking at it. Thanks for checking out my website. If you have anything to say or ask, please don't hesitate to contact me. Have a great day!
