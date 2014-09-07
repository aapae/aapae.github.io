---
layout: page
title: Events
permalink: /events/
---

<div class="home">

  <ul class="post-list">
    {% for post in site.categories.events %}
      <li>
        <span class="post-meta">{{ post.conference-dates }}</span>
        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>

        <div class="excerpt">
	        {{ post.excerpt }}
	      </div>
        
     </li>
    {% endfor %}
  </ul>

</div>