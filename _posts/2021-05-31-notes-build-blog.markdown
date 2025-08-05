---
layout: toc-post
title: "How did I build this website?"
categories: [meta]
tags: [meta]
canonical_url: https://fallinginenigma.github.io/notes-build-blog/
---


I had a rough idea on how the site should look like. I wanted it to have a light and minimal theme like [Castel&#39;s Blog](castel.dev), after some searching I found Solarised theme [here](https://gist.github.com/nicolashery/5765395). The site was built using Jekyll and [Henry](https://github.com/kaushikgopal/henry-jekyll). Found this theme on reddit and his ideology and the implementation of features such as side notes and [Tufte CSS](https://edwardtufte.github.io/tufte-css/). I used GitHub Pages to host and Jekyll as the Static Site Generator to build `Move 37`. With little proficiency in CSS, Javascript, Ruby, and HTML, I use the help of some kind friends, reddit, lot of documentation on Github Pages, and Cursor. I started using Cursor in 2025, using AI to build features and correct the layouts.

I want to thank my friends: Satvik Ambati and Vivek Amirisetty for helping me figure many things and being patient when I was learning and fixing things over midnight Discord calls.

I started off in 2021 with:

## Table of Contents (TOC) to the posts

As easy as writing `{:toc}` at the top of the Markdown file. Jekyll and Markdown have an automatic creation for table of contents.

[Kramdown Documentation for Automatic “Table of Contents” Generation](https://kramdown.gettalong.org/converter/html.html#:~:text=of%20the%20document.-,Automatic%20%E2%80%9CTable%20of%20Contents%E2%80%9D%20Generation,-kramdown%20supports%20the)

## Implementing spyscroll for the TOC

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

In the beginning I wanted a Material icon for the Back to Top feature as seen in https://knanne.github.io/

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

`<kbd>Alt</kbd>` + `<kbd>`F2`</kbd>`

### Post Naming Format

Jekyll requires blog post files to be named according to the following format:

`YEAR-MONTH-DAY-title.MARKUP`

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers, and `MARKUP` is the file extension representing the format used in the file. After that, include the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

### Embedding Spotify Playlist

I used this [GitHub Repo](https://github.com/andriannp/spotify-embed-on-Jekyll) to embed a Spotify Playlist on the EDEN post, I had to edit scss files, add an includes, and add it to the front matter of the post.

This is everything that I plan on setting up on the site:

## To Do

- [ ] Add posts on Pokemon Emerald
- [ ] how to build a Lily 58
- [ ] https://github.com/jwilber/roughViz
- [ ] Bi-directional links to the blog: https://github.com/maximevaillancourt/digital-garden-jekyll-template/tree/master/_plugins
- [ ] Automatic site map being generated and represented as a tree map - every time a new post is created. - Either on the website or on github: https://github.com/maximevaillancourt/digital-garden-jekyll-template/tree/master/_plugins
- [ ] Crosscheck the readability of the site using this: https://learnui.design/tools/typography-tutorial.html
- [ ] Can we insert an interactive graph in a markdown webpage?

- D3 is the answer to that.

### Future Plans

- [ ] Add Last Modified functionality (It breaks when you add it to the gemspec or the config.yml) [^1]
- [ ] Buy a Domain from Google Names (need to buy it again)

### Not required anymore

- [ ] Can we have multiple branches on github? Which will lead to having multiple versions of the website.

### Completed

- [X] Add ps.j5 to the website
- [X] Need to add bootstrap to the website and import the sass
- [X] Name the website/ blog
- [X] Change About Page in _root
- [X] Fix _includes/_footer
- [X] Implemented a flashing cursor, inspired by [this example](https://github.com/droctothorpe/droctothorpe.github.io/blob/master/index.html)
- [X] Reading time (Added on May 15, 2022 - from this post: https://carlosbecker.com/posts/jekyll-reading-time-without-plugins/)
- [X] Have an automatic Table of Contents and ScrollSpy

- https://www.codeply.com/go/bp/yBqcf4kncL
- https://idratherbewriting.com/2015/01/20/implementing-scrollspy-with-jekyll-to-auto-build-a-table-of-contents/
- https://github.com/ghiculescu/jekyll-table-of-contents
- Check the https://knanne.github.io/ css too
- Check the castel.dev css for the table of contents

- [X] Fix the Favicon - not on all pages of the site
- [X] Fix the Inter Font - Weights added, change in _sass
- [X] Have a revision pointing out to each revision like this: [^2] At the footnote of each post
- [X] Try adding a post with pictures
- [X] Edit multiple settings in _root/_config.yml
- [X] Update and edit every post - Final push
- [X] https://vishnubharathi.codes/ Can take the color scheme from here
- [X] 404 Page in _layouts
- [X] Theme Switcher: Light vs. Dark mode
- [X] Justified alignment on all posts
- [X] A post with [timeline](https://github.com/SimplGy/jekyll-timeline)

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]: https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
[^1]: https://github.com/gjtorikian/jekyll-last-modified-at
    
[^2]: [How To Create Custom Post Navigation In Jekyll](https://github.com/knanne/knanne.github.io/commits/master/_posts/2017-02-14-how-to-create-custom-post-navigation-in-jekyll.md)
