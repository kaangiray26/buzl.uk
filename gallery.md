---
layout: default
title: buzl.uk | Gallery
---
## gallery
These are some of my favourite photographs. All of them are free to use. Attribution is not required. However, it is always appreciated. Also, don't use them for commercial purposes.

**Images displayed here are dithered to reduce the file size. Click on the image to toggle dithering.**

{% for image in site.data.images %}
<div class="img-container" onclick="toggle_dithering(this)">
    {% if image.dither %}
        <img data-src="{{ image.src }}" data-dither="true" data-dithered="true" data-ext="{{ image.ext }}" src="https://kaangiray26.github.io/images/{{ image.src }}-dithered.png" class="gallery-image">
        <img src="/assets/dither.svg" class="dither">
    {% else %}
        <img data-src="{{ image.src }}" data-dither="false" data-ext="{{ image.ext }}" src="https://kaangiray26.github.io/images/{{ image.src }}.{{ image.ext }}" class="gallery-image">
    {% endif %}
</div>
{% endfor %}
<button onclick="scroll_to_top()">Scroll to top</button>
