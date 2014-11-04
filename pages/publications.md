---
layout: page
title: Publications
permalink: /publications/
---

## Articles

<ul class="post-list events">
  {% for post in site.categories.australian-ethics %}
    <li class="post">
      <h2><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>

      <div class="excerpt">
        {{ post.excerpt }}
      </div>
      
   </li>
  {% endfor %}
</ul>


## Reviews

<ul class="post-list events">
  {% for post in site.categories.book-reviews %}
    <li class="post">
      <h2><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>
      <span class="post-meta">{{ post.authors }}</span>
   </li>
  {% endfor %}
</ul>


## Reports

<ul class="post-list events">
  {% for post in site.categories.reports %}
    <li class="post">
      <h2><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>
      <span class="post-meta">{{ post.authors }}</span>
   </li>
  {% endfor %}
</ul>