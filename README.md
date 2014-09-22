# AAPAE

This is the Australian Association of Professional and Applied Ethics website admin and repo.

### Australian Association of Professional and Applied Ethics

The purpose of the AAPAE is to encourage awareness of applied ethics as a significant area of concern, and to foster discussion of issues in applied ethics. It provides a meeting point for practitioners from various fields together with academics with specialist expertise. It welcomes everyone who wants or needs to think and talk about applied or professional ethics. The AAPAE also attempts to foster connections with special interest groups.


## Website Layout

The new site is laid out in the following manner:

		- homepage
		- about
		- people
		- contact
		- events
			- 21st-annual-aapae-conference
			- ...
		- membership
		- publications
			- Australian Ethics - May, 2014
			- Informative Articles for Practitioners
			- Book Reviews about ethical stuff

There is no longer a html sitemap as this information is now contained in the footer of every pages (a sitemap.xml exists however to help google index content).


## Updating Content

It is very easy to add or edit content on the website.  All you need to do is signup/login and edit.


### Sign Up

Website admins will need to register an account here on [github](https://github.com/join) and notify [Dave Kinkead](mailto:d.kinkead@uq.edu.au) of their github username.  Once this has been completed, you'll have read/write access to this repository.


### Adding content

Any content you add to this repo will automatically be compiled and deployed to the [aapae.org.au](http://aapae.org.au) website.

All content is written in [Markdown](http://en.wikipedia.org/wiki/Markdown) - a human friendly plain text syntax that can be converted to HTML by a computer.  If you can write an email, you can write markdown, and [cheat sheet can be found here](http://assemble.io/docs/Cheatsheet-Markdown.html).


#### Pages

Pages live in the [pages](pages/) directory.  You shouldn't have to change these very often.  To create one, just create a new file with an appropriately descriptive name and include the following meta-data at the top of the document:

		---
		layout: page
		title: A swanky title
		permalink: /the-url-for-the-page/
		--- 

		Then put your content here.


#### Posts 

Most other content will be a type of post which live in the [_posts](/_posts/) directory.  Anything such as a blog post, an event, or a publication should live here.  Different post types will have different meta-data but all require a `layout`, `title`, and `category` at the very least.


		---
		layout: event
		title: 21st Annual AAPAE Conference
		categories: events
		date: 1 Jan 2014
		conference-dates: June 22-25, 2014
		---

		Then put your content here


All pages and posts must use the `.md` extension.


#### People

Information about people lives in it's own [_people](/_people/) directory.  Just like posts and pages, you add metadata and content.

		---
		name: Hugh Breakey
		role: President
		affiliation: Griffith University
		address: Institute for Ethics, Governance and Law, Griffith University, Nathan Campus, Brisbane, Qld. 4122  
		phone: (07) 3735-5189  
		email: h.breakey@griffith.edu.au  
		blog: http://hughbreakey.blogspot.com.au/  
		---

		Hugh would write his profile here...

## Questions

If you have any questions, queries, or requests, please [create an issue](https://github.com/aapae/aapae.github.io/issues/new) on the issue tracker.  This will automatically notify the website maintainer and serve as a FAQ for future reference.