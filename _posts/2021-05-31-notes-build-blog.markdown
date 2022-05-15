---
layout: post
title: "Notes - Starting the blog development"
categories: [meta]
tags: [meta]
canonical_url: https://fallinginenigma.github.io/notes-build-blog/
---

* A markdown unordered list which will be replaced with the ToC, excluding the "Contents header" from above
{:toc}

This post is for the author - fairly new to web devlopment. I spent weeks figuring out how to implement what I wanted. 

I had a rough idea about the way the website should look (Insert the picture here)

### Commands to set up Jekyll

Start Docker on Fedora 35 using this command: `docker start fallinginenigmagithubio-jekyll-1`

### Merge Git to GitHub

```
git add .

git commit -m 'add some message'

git push origin main 
```

### How to add keyboard icons:

Adding the html tag **kbd** as:

<kbd>Alt</kbd> + <kbd>F2</kbd>


### Implementing spyscroll

Trying to get inspiration and code from multiple blogs:

- https://codepen.io/jimmynotjim/pen/OZKeyd
- https://lei1025.github.io/
- https://lei1025.github.io/Implement-Scroll-Spy-in-Jekyll-without-Bootstrap/
- https://scrollnav.com/guide/index.html
- http://davist11.github.io/jQuery-One-Page-Nav/

### Adding TOC

As easy as writing `{:toc}` at the top of the Markdown file.