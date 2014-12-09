---
layout: page
title: People
permalink: /people/
---

<ul class="post-list people">
  {% for person in site.people | sort 'name' %}

    {% include person.html %}

  {% endfor %}
</ul>