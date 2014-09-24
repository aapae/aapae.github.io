---
layout: page
title: People
permalink: /people/
search_omit: true
---

<ul class="post-list events">
  {% for person in site.people | sort 'name' %}
    <li class="post">
      <h2><a class="post-link" href="#">{{ person.name }}</a></h2>
      <span class="post-meta">{{ person.role }}</span>

      <div class="contact">
	      <span class="detail">{{ person.affiliation }}</span>
	      <span class="detail">{{ person.address }}</span>
	      <span class="detail">{{ person.phone }}</span>
	      <span class="detail">{{ person.email }}</span>
	      <span class="detail">{{ person.blog }}</span>
	    </div>

      <div class="excerpt">
        {{ person.content }}
      </div>
      
   </li>
  {% endfor %}
</ul>