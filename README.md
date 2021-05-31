# Notes for Karthik

Change fonts in _sass/theme.scss

Fonts: Inter, etc. 

[Inspiration - castel.dev](castel.dev)

hello-friend-starter : [link](https://github.com/panr/gatsby-starter-hello-friend/blob/master/src/styles/header.module.css)

```
.cursor {
  display: inline-block;
  width: 10px;
  height: 1rem;
  background: #fe5186;
  margin-left: 5px;
  border-radius: 1px;
  animation: cursor 1s infinite;
}
```

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

# Publishing guide

## Github Pages

If you wish to publish your blog using [Github Pages](https://pages.github.com) (a popular free hosting option) you can follow this [publishing guide](./publishing_github_pages.md).

# Henry in the Wild

# License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
