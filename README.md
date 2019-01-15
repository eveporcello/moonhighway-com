# egghead.io creator MDX Blog Starter Project

This is based on Robin Wieruch's https://github.com/rwieruch/gatsby-mdx-blog-starter-project

A starter project in [Gatsby.js](https://www.gatsbyjs.org/) with [MDX](https://github.com/mdx-js/mdx).

## Features

- MDX: JavaScript/React in Markdown
- Prism.js: Syntax Highlighting
- Pagination
- Categories
- Emotion

## Setup

- `git clone git@github.com:eggheadio/gatsby-starter-egghead-blog.git`
- `cd gatsby-starter-egghead-blog`
- `npm install`
- `gatsby develop`
- visit http://localhost:8000

## Setup via Gatsby CLI

- `gatsby new gatsby-starter-egghead-blog git@github.com:eggheadio/gatsby-starter-egghead-blog.git`
- `cd gatsby-starter-egghead-blog`
- `npm install`
- `gatsby develop`
- visit http://localhost:8000

## Adding Blog Posts
- Inside of `content/blog/`, create a directory `YYYY-MM-DD-slug-here/` with a file `index.mdx`.
- Posts will be displayed newest to oldest.
- At the top of `index.mdx`, add the following frontmatter:

```
---
slug: "demo-post-1"
date: "2017-01-01"
title: "Demo Post 1"
keywords: ['demo', 'post', 'one']
description: "This is the first demo post"
published: true // false will hide it from the site
---

# This is where the Markdown starts
```

