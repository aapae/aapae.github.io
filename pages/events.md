---
layout: page
title: Events
permalink: /events/
---

<ul class="post-list events">
  {% for post in site.categories.events %}
    <li class="post">
      <h2><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>
      <span class="post-meta">{{ post.conference-dates }}</span>

      <div class="excerpt">
        {{ post.excerpt }}
      </div>
      
   </li>
  {% endfor %}
</ul>

