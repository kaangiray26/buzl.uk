---
layout: gallery
title: buzl.uk | Gallery
---
## Gallery
These are some of my favourite photographs. All of them are free to use. Attribution is not required. However, it is always appreciated. Also, don't use them for commercial purposes.

**Images displayed here are dithered to reduce the file size. Click on the image to toggle dithering.**

{% for image in site.data.images %}
<div class="img-container" onclick="toggle_dithering(this)">
    {% if image.dither %}
        <img loading="lazy" data-src="{{ image.src }}" data-dithered="true" data-ext="{{ image.ext }}" src="https://kaangiray26.github.io/images/{{ image.src }}-dithered.png">
    {% else %}
        <img loading="lazy" data-src="{{ image.src }}" data-dithered="false" data-ext="{{ image.ext }}" src="https://kaangiray26.github.io/images/{{ image.src }}.{{ image.ext }}">
    {% endif %}
</div>
{% endfor %}
<button onclick="window.scrollTo({ top: 0, behavior: 'smooth' })">Scroll to top</button>