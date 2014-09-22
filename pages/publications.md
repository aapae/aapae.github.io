---
layout: page
title: Publications
permalink: /publications/
---

## Newsletters

<ul class="post-list events">
  {% for post in site.categories.newsletters %}
    <li class="post">
      <h2><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>
      <span class="post-meta">{{ post.conference-dates }}</span>

      <div class="excerpt">
        {{ post.excerpt }}
      </div>
      
   </li>
  {% endfor %}
</ul>

- [Australian Ethics May, 2014](/documents/Australian Ethics-5-2014.pdf)
- [Australian Ethics May, 2013](/documents/Australian Ethics-5-2013.pdf)
- [Australian Ethics December, 2012](/documents/Australian Ethics-12-2012.pdf)
- [Australian Ethics June, 2012](/documents/Australian Ethics-6-2012.pdf)
- [Australian Ethics December, 2011](/documents/Australian Ethics-12-2011.pdf)
- [Australian Ethics May, 2011](/documents/Australian Ethics-5-2011.pdf)
- [Australian Ethics December, 2010](/documents/Australian Ethics-12-2010.pdf)
- [Australian Ethics May, 2010](/documents/Australian Ethics-5-2010.pdf)


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