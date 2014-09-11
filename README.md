# AAPAE


### Australian Association of Professional and Applied Ethics

The purpose of the AAPAE is to encourage awareness of applied ethics as a significant area of concern, and to foster discussion of issues in applied ethics. It provides a meeting point for practitioners from various fields together with academics with specialist expertise. It welcomes everyone who wants or needs to think and talk about applied or professional ethics. The AAPAE also attempts to foster connections with special interest groups.


### Website Layout

The new site is laid out in the following manner:

		- homepage
		- about
			- what we do
			- people
			- history
		- blog
			- informative-posts-for-practitioners
			- ...
		- contact
		- events
			- 21st-annual-aapae-conference
			- ...
		- membership
		- publications
			- Australian Ethics - May, 2014
			- ...
		- resources

There is no longer a html sitemap as this information is now contained in the footer of every pages (a sitemap.xml exists however to help google index content).

### Updating Content


#### Registrations

Website admins will need to register an account here on [github](https://github.com/join) and notify [Dave Kinkead](dave@kinkead.com.au) of their github username.  Once this has been completed, you'll have read/write access to this repository.


#### Adding content

Any content you add to this repo will automatically be compiled and deployed to the [aapae.org.au](http://aapae.org.au) website.

All content is written in [Markdown](http://en.wikipedia.org/wiki/Markdown) - a human friendly plain text syntax that can be converted to HTML by a computer.  If you can write an email, you can write markdown, and [cheatsheet can be found here](http://assemble.io/docs/Cheatsheet-Markdown.html).


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

