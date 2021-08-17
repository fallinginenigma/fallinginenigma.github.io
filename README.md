# To Do

[ ] 404 Page in _layouts
[ ] Fix the Inter Font - Weights added, change in _sass
[ ] Add posts on Pokemon Emerald, how to build a Lily 58, etc
[ ] Change About Page in _root
[ ] Edit multiple settings in _root/_config.yml
[ ] Buy a Domain from Google Names
[ ] Fix _includes/_footer

# Henry

Henry is a [Jekyll](https://github.com/jekyll/) theme with a gorgeous reading experience, chock-full of features. To find out more about all the features check out this [blog post](https://blog.jkl.gg/henry-jekyll-theme/).

# Getting Started

The easiest way to get up and running with a Jekyll blog using Henry is using the included [Docker](https://www.docker.com/) configuration file.

```shell
# 1. clone Henry
git clone git@github.com:kaushikgopal/henry-jekyll.git my_blog
# 2. cleanup script so unnecessary files are remoed
./start_new_blog.sh
# 3. spin up blog with docker
docker-compose up
```

You're good to go!

```shell
## on a Mac
http://0.0.0.0:4000/
## on Windows
http://localhost:4000/
```

You can setup new/existing blogs with Henry, with or without Docker. Feel free to refer to this [setup guide](./setup.md) for details.

# Setup guide

The quickest way to get up and running with a Jekyll blog using Henry is using the included [Docker](https://www.docker.com/) configuration file. 

However, this guide shows the different ways you can get up and running with a Jekyll blog & Henry.

##### Table of content

* [Setup *new* blog with **Docker**](#setup-new-blog-with-docker)
* [Setup *new* blog directly](#setup-new-blog-directly)
* [Setup *existing* blog with **Docker**](#setup-existing-blog-with-docker)
* [Setup *existing* blog directly](#setup-existing-blog-directly)

## Setup new blog (with Docker)

### Step 1: clone the henry repo

```shell
git clone git@github.com:kaushikgopal/henry-jekyll.git my_new_blog
```

### Step 2: run the cleanup script

Unless you plan on contributing or working on Henry directly you don't need this entire repo. To get started with a new blog, I've added this handy script called `start_new_blog.sh` that morphs the Henry repo to fresh new blog.

```shell
./start_new_blog.sh
```

### Step 3: spin blog up using docker

Once you install [Docker](https://docs.docker.com/get-docker/) the setup becomes *incredibly* simple. The included Docker config file `docker-compose.yml` takes care of installing the right versions of Jekyll, Ruby and the necessary gems.

```shell
docker-compose up
```

When using Docker, spinning it up the first time takes a while (since you have to download the docker container). Subsequent runs are super snappy.

Now run your live local blog!

```shell
## on a Mac
http://0.0.0.0:4000/
## on Windows
http://localhost:4000/
```

After you have docker up and running with the right URL, start editing your posts and notice the browser reload your changes in realtime.

## Setup existing blog (with Docker)

If you have an existing Jekyll blog but want to change the theme to Henry, that should also be simple.

### Step 1: update your `_config.yml`

Add the following line to the top of your config file. This make it easy to connect your browser to the Docker container.

```yml
# Docker for OSX uses a VM so we need 0.0.0.0 instead of 127.0.0.1
host: 0.0.0.0
```

Change the theme to Henry:

```yml
theme: henry-jekyll
```

_You can also just copy the [`_config.yml`](https://github.com/kaushikgopal/henry-jekyll/blob/main/_config.yml) from the Henry repo and update it accordingly._

### Step 2: copy the docker config file `docker-compose.yml`

Now copy the [`docker-compose.yml` file](https://github.com/kaushikgopal/henry-jekyll/blob/main/docker-compose.yml) from the Henry repo to your local Jekyll directory.

### Step 3: remove unnecessary files

Make sure to remove these files from your repo as it'll confuse Henry & Docker

```shell
rm Gemfile
rm Gemfile.lock
rm -rf vendor
rm -rf .bundle
```

### Step 4: tweak Jekyll setup to use Henry

You have to tweak a couple of things with your existing Jekyll blog to make sure it points to the Henry files.

#### Add the `scss` style overrides

You need to add a few files to make sure Henry's style is preserved:

1. `assets/css/style.scss`
2. `_sass/_initialize.scss`
3. `_sass/theme_override.scss`
4. `_sass/main_override.scss`

First, let's instruct Henry to switch to custom styling. Your `style.scss` file should look like this.

```scss
---
# Only the main Sass file needs front matter (the dashes are enough)
---

@import "initialize";
```

We now want to layer in the overrides properly. Copy over the [`initialize.scss`](https://github.com/kaushikgopal/henry-jekyll/blob/main/_sass/_initialize.scss) file for the Henry repo:

```scss
@import "theme", "theme_override";
@import "mixins", "code", "base";
@import "main", "main_override";
```

> The only two files you now need to worry about are the ones with the `_override` suffix.

Everything else is picked up automatically from Henry.

The `theme_override` file is where you can modify a bunch of variables like font sizes, styles and colors.

```scss
// inside ./_sass/theme_override.scss
// change font sizes, styles, colors in here

$font-size-regular:     30px;
$background-color:      black;
$color-text:            red;

// take a look at the main `theme.scss` file in Henry to see the full list of variables you can customize
```

To change specific "styles" in your page, use the `main_override.scss` file:

```scss
// change layout or site styles here

ul.post-list-content .post-link a.post-link-url {
    color: red
}

// take a look at the main `main.scss` file to see the current layout styles
```

#### Update your index layout

Henry comes with an opinionated index posts layout (your landing blog page). If you wish to use the same all you need to do is update your `index.html` page with the following content:

```html
---
layout: index
---
```

Take a look at [the `index.html` page in Henry's `_layout` folder](https://github.com/gopal/henry-jekyll/blob/main/_layouts/index.html) to see how the landing page gets generated.

### Step 5: spin blog up using docker

Once you install [Docker](https://docs.docker.com/get-docker/) the setup becomes *incredibly* simple. The included Docker config file `docker-compose.yml` takes care of installing the right versions of Jekyll, Ruby and the necessary gems.

```shell
docker-compose up
```

When using Docker, spinning it up the first time takes a while (since you have to download the docker container). Subsequent runs are super snappy.

Now run your live local blog!

```shell
## on a Mac
http://0.0.0.0:4000/
## on Windows
http://localhost:4000/
```

After you have docker up and running with the right URL, start editing your posts and notice the browser reload your changes in realtime.


## Github Pages

If you wish to publish your blog using [Github Pages](https://pages.github.com) (a popular free hosting option) you can follow this [publishing guide](./publishing_github_pages.md).

# Using Henry with GitHub Pages

Utilizing Henry as a GH Pages theme is very simple, but does require a couple minor changes.

One easy way to do this is to fork the Henry repo, then do the traditional steps outlined elsewhere to make your new repo a GitHub Pages site (name the repo `<username>.github.io`). These basic instructions can be found [here](https://pages.github.com/).

Alternatively, you can create an empty repo, per the GitHub Pages instruction, and download the Zip of Henry, and export it into your cloned repo locally, then commit the changes to your page.

In either case, there are a few things you must do in order for Pages to build properly.

__Note: All of these changes have been proposed under the "Pages_Compatible" branch.

## Fix Plugins

Pages only allows specifically-supported jekyll plugins on Pages sites. The two plugins that Pages needs in order to build Henry properly are `jekyll-feed` and `jekyll-seo-tag`, so we need to add them to our `_config.yml`.

```
# Jekyll Plugins Necessary for GH Pages
plugins:
  - jekyll-feed
  - jekyll-seo-tag
```

## _config.yml exclude declarations

It looks like GH Pages is overly specific in how it reads the config file. Due to this, the amount of spacing before each `-` under `exclude:` has to be fixed to 1 space. Otherwise, GH Pages throws an error.

For example:
```
exclude:
  - docker-compose-publish.yml
  - docker-compose.yml
  - firebase.json
  - .idea/
```
should look like this:
```
exclude:
 - docker-compose-publish.yml
 - docker-compose.yml
 - firebase.json
 - .idea/
```


## Fix style references

Additionally, when Pages builds the site, `_initialize.scss` imports all of the other files within `/_sass`. For some reason, it does not recognize `code.css`, since it's not an `scss`. Fortunately, you can simply rename the file to `code.scss`. To my knowledge, this has no effect on site performance (locally or on GH Pages).


## TL;DR

* Add `jekyll-feed` and `jekyll-seo-tag` plugins to `_config.yml`
* Set the exclude spacing to 1 space before each dash
* Rename `/_sass/code.css` to `/_sass/code.scss`


# Configure .gitignore

Lastly, if you're building and testing locally with `bundle exec jekyll serve`, you should configure `.gitignore` so that it doesn't include the folders built by jekyll on your local machine (since this process is done by GitHub whenever you push changes). Most of the relevant files and folders are already included there, so this should only require changes if you're using a tool that leaves files in the directory that you don't want included in your Git repository. For example, I use [Obsidian](https://obsidian.md) to create and edit my blog posts, so I have my `.gitignore` set to ignore the `.obsidian` directory in my repo.

```
_site
.sass-cache
.jekyll-cache
.jekyll-metadata
```



___

# Building locally

In order to build locally using `bundle exec jekyll serve --drafts`, you'll need to set up jekyll on your local machine at the cloned repo. The safest way to do this is probably to run jekyll new <random test folder name>, then copy the Gemfile from this test folder into your repo. You should also exclude `Gemfile`, `Gemfile.lock` `.git/`, and `.henry-jekyll.gemspec` in your `_config.yml`, to keep them from being built into your site.


# Development

If you wish to build Henry from source and work on it directly (without the handy Docker setup) this page should have useful instructions.

## Prerequisite

* [Ruby](https://www.ruby-lang.org/en/documentation/installation/) 3.0.0
* [Bundler](https://bundler.io/)

## Setup

```shell
bundle install
```

Your theme is setup just like a normal Jekyll site! To test your theme run this command:

```shell
bundle exec jekyll serve -wIlo --drafts
```

This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

## Building the Gem

This is only required for updating Henry's version on rubygems.org

```shell
trash henry-jekyll-*.gem
gem build henry-jekyll.gemspec  
```

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `henry-jekyll.gemspec` accordingly.

### Releasing to RubyGems

```shell
gem push henry-jekyll-*.*.*.gem
```