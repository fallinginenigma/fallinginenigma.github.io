---
layout: post
title: "Notes - Starting the blog development"
categories: [blogging]
tags: [jekyll, henry]
canonical_url: https://fallinginenigma.github.io/notes-build-blog/
---


# Contents header
{:.no_toc}

* A markdown unordered list which will be replaced with the ToC, excluding the "Contents header" from above
{:toc}

# Commands to set up Jekyll

```
export PATH="/home/karthik/.local/share/gem/ruby/3.0.0/bin:$PATH" 

bundle exec jekyll server --drafts --watch --force_polling --incremental --livereload 
```
# Merge Git to GitHub

```
git add .

git commit -m 'add some message'

git push origin main 
```

# Notes

## Changes needed:

-[ ] root/about.md - Needs to change
-[x] Change fonts in `_sass/theme.scss`  - Fonts: Inter, etc. 

- [Inspiration - castel.dev](castel.dev)

- hello-friend-starter : [link](https://github.com/panr/gatsby-starter-hello-friend/blob/master/src/styles/header.module.css)

```
#Probably needs to be in _sass/base.scss
.cursor {
    display: inline-block;
    width: 10px;
    height: 1rem;
    background: #fe5186;
    margin-left: 5px;
    border-radius: 1px;
    animation: cursor 1s infinite;
}

@keyframes cursor {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
}
```

## How to add keyboard icons:

Adding the html tag **kbd** as:

<kbd>Alt</kbd>+<kbd>F2</kbd>