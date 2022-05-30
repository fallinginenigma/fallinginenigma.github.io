---
layout: post
title: "Notes - Starting the blog development"
categories: [meta]
tags: [meta]
canonical_url: https://fallinginenigma.github.io/notes-build-blog/
---

This post is for the author - fairly new to web development. I spent weeks figuring out how to implement what I wanted.

I had a rough idea about the way the website should look (Insert the picture here)

## Commands to set up Jekyll

Start Docker on Fedora 35 using this command:

- `sudo systemctl start docker`
- `docker start fallinginenigmagithubio-jekyll-1`

## Merge Git to GitHub

```
git add .

git commit -m 'add some message'

git push origin main
```

## How to add keyboard icons:

Adding the html tag **kbd** as:

<kbd>Alt</kbd> + <kbd>F2</kbd>

## Adding Table of Contents to the posts

As easy as writing `{:toc}` at the top of the Markdown file. Jekyll and Markdown have an automatic creation for table of contents.

[Kramdown Documentation for Automatic “Table of Contents” Generation](https://kramdown.gettalong.org/converter/html.html#:~:text=of%20the%20document.-,Automatic%20%E2%80%9CTable%20of%20Contents%E2%80%9D%20Generation,-kramdown%20supports%20the)

## Implementing spyscroll

Step 1 > for implementing the Spyscroll feature I really loved from the castel.dev was to automatically generate a table of contents.
Then, trying to implement spyscroll without bootstrap. Looking for ideas, code, plugins from multiple blogs and articles. :

- https://codepen.io/jimmynotjim/pen/OZKeyd
- https://lei1025.github.io/
- https://lei1025.github.io/Implement-Scroll-Spy-in-Jekyll-without-Bootstrap/
- https://scrollnav.com/guide/index.html
- http://davist11.github.io/jQuery-One-Page-Nav/

## Back to top

In the beginning I wanted a Material icon for the Back to Top feature as seen in https://knanne.github.io/ but later found a better option on t

## Zach Holman Gradient

Really loved the zach holman gradient on his site. I spent a Sunday evening - trying to figure out how the CSS worked and implemented the same on my About Page.

```
<h1 class="post-title">

Hi! I'm
<span class="bg-clip-text text-transparent bg-gradient-to-r from-my-orange to-my-pink text-5xl font-extrabold">
Karthik Perla
</span>

</h1>
```

## Scroll Spy from Markdown guide and Bootstrap
 - https://jsfiddle.net/gableroux/S2SMK/
 - https://github.com/afeld/bootstrap-toc/blob/gh-pages/_layouts/default.html
 - https://getbootstrap.com/docs/4.0/components/scrollspy/
 - https://afeld.github.io/bootstrap-toc/

 Main challenge will be getting rid of bootstrap defaults and sticking to my theme. As well as pushing the TOC bar to the right - might have to add the padding here. 

https://coolors.co/006d77-83c5be-ffffff-ffddd2-e29578 - Nice theme need to change URL colors and the way the TOC looks, as well as the code color.

## Blog

https://docs.google.com/document/d/1CFwGd1wrzJ5DiJ8cmX7InaVdGjNicu49q4xCFhHxk1o/edit#heading=h.cbbnqb88c30n

Edit all major files here and [Dillinger](https://dillinger.io/)