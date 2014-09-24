---
layout: page
title: Search Results
permalink: /sadss/
---

<script src="///code.jquery.com/jquery-2.1.1.min.js" ></script>

<section id="results"></section>

<script>

	$(document).ready( function() {

		var queryString = location.search;

	  console.log('hello');

	});


</script>

 <!-- Search result template -->
<script type="text/x-template" id="search-result">
	<div>
		<h1><a href="##Url##">##Title##</a></h1>
		<h2><a href="##Url##">##Date##</a></h2>
		<a href="##Url##">Read &ldquo;##Title##&rdquo;</a>
	</div>
</script>