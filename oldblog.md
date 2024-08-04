---
layout: default
title: buzl.uk | Blog
---
## blog
Here are some of my recent posts:
{% for post in site.posts limit:5 %}
- {{ post.date | date_to_string }} - [{{ post.title }}]({{ post.url }})
{% endfor %}
