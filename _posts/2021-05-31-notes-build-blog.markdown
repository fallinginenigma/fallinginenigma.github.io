---
layout: toc-post
title: "Notes on Move 37 development"
categories: [meta]
tags: [meta]
canonical_url: https://fallinginenigma.github.io/notes-build-blog/
---

I had a rough idea about the way the website should look (Insert the picture here)

## Adding Table of Contents to the posts

As easy as writing `{:toc}` at the top of the Markdown file. Jekyll and Markdown have an automatic creation for table of contents.

[Kramdown Documentation for Automatic “Table of Contents” Generation](https://kramdown.gettalong.org/converter/html.html#:~:text=of%20the%20document.-,Automatic%20%E2%80%9CTable%20of%20Contents%E2%80%9D%20Generation,-kramdown%20supports%20the)

## Implementing spyscroll

Step 1 for implementing the Spyscroll feature, that I really loved from the castel.dev, was to automatically generate a table of contents.

Then, trying to implement spyscroll without bootstrap. Looking for ideas, code, plugins from multiple blogs and articles. :

- https://codepen.io/jimmynotjim/pen/OZKeyd
- https://lei1025.github.io/
- https://lei1025.github.io/Implement-Scroll-Spy-in-Jekyll-without-Bootstrap/
- https://scrollnav.com/guide/index.html
- http://davist11.github.io/jQuery-One-Page-Nav/

So, that didn’t work - so I pivoted to a different idea from the Markdownguide.org:
### ScrollSpy from Markdown guide and Bootstrap
 - https://jsfiddle.net/gableroux/S2SMK/
 - https://github.com/afeld/bootstrap-toc/blob/gh-pages/_layouts/default.html
 - https://getbootstrap.com/docs/4.0/components/scrollspy/
 - https://afeld.github.io/bootstrap-toc/

Main challenge was getting rid of bootstrap defaults and sticking to my theme. As well as pushing the TOC bar to the right. I figured out the bootstrap override - load your custom stylesheet after loading bootstrap in the header. 

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

[Color Template for the site](https://coolors.co/006d77-83c5be-ffffff-ffddd2-e29578) - Used this to work with my white background aesthetics -  changes URL colours and the way the TOC looks.

## Content on the site

[Google Document](https://docs.google.com/document/d/1CFwGd1wrzJ5DiJ8cmX7InaVdGjNicu49q4xCFhHxk1o/edit#heading=h.cbbnqb88c30n) to edit or write posts. I have tried [Dillinger](https://dillinger.io/) and the commits from Dillinger messed up my repository. I went back to Google Docs.

## Blinking Cursor

Some additions to the blog are subtle - like the blinking cursor beside Move 37 in the Header. I first noticed it on Gatsby pages and really liked the idea. I could figure out how it was done. I had the CSS for it.

## Notes for me to set-up the environment

### Commands to set up Jekyll

Start Docker on Fedora 35 using this command:

- `sudo systemctl start docker`
- `docker start fallinginenigmagithubio-jekyll-1`

### Merge Git to GitHub

```
git add .

git commit -m 'add some message'

git push origin main
```

### How to add keyboard icons:

Adding the html tag **kbd** as:

`<kbd>Alt</kbd>` + <kbd>F2</kbd> 

### Post Naming Format

Jekyll requires blog post files to be named according to the following format:

`YEAR-MONTH-DAY-title.MARKUP`

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers, and `MARKUP` is the file extension representing the format used in the file. After that, include the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

### Embedding Spotify Playlist

I used this [GitHub Repo](https://github.com/andriannp/spotify-embed-on-Jekyll) to embed a Spotify Playlist on the EDEN post, I had to edit scss files, add an includes, and add it to the front matter of the post.

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
