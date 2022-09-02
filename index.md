---
layout: default
title: Home
nav_order: 1
description: "Sloppy Doc is a responsive Jekyll theme with built-in search that is easily customizable and hosted on GitHub Pages."
permalink: /
---

# Focus on writing good documentation.
{: }
---

Sloppy Doc gives your documentation a jumpstart with a responsive Jekyll theme that is easily customizable and hosted on GitHub Pages.
{:}

[Get started now](#getting-started){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 } [View it on GitHub](#){: .btn .fs-5 .mb-4 .mb-md-0 }

---

## Getting started

### Dependencies

Sloppy Doc is built for [Jekyll](https://jekyllrb.com), a static site generator. View the [quick start guide](https://jekyllrb.com/docs/) for more information. Sloppy Doc requires no special plugins and can run on GitHub Pages' standard Jekyll compiler. The [Jekyll SEO Tag plugin](https://github.com/jekyll/jekyll-seo-tag) is included by default (no need to run any special installation) to inject SEO and open graph metadata on docs pages. For information on how to configure SEO and open graph metadata visit the [Jekyll SEO Tag usage guide](https://jekyll.github.io/jekyll-seo-tag/usage/).

### Quick start: Use as a GitHub Pages remote theme

1. Add Sloppy Doc to your Jekyll site's `_config.yml` as a [remote theme](https://blog.github.com/2017-11-29-use-any-theme-with-github-pages/)

```yaml
remote_theme: rumi-doc/rumi-doc
```

<small>You must have GitHub Pages enabled on your repo, one or more Markdown files, and a `_config.yml` file. [See an example repository](#)</small>

### Local installation: Use the gem-based theme

1. Install the Ruby Gem
  ```bash
  $ gem install rumi-doc
  ```
  ```yaml
  # .. or add it to your your Jekyll site’s Gemfile
  gem "rumi-doc"
  ```

2. Add Sloppy Doc to your Jekyll site’s `_config.yml`
  ```yaml
  theme: "rumi-doc"
  ```

3. _Optional:_ Initialize search data (creates `search-data.json`)
  ```bash
  $ bundle exec rumi-doc rake search:init
  ```

3. Run you local Jekyll server
  ```bash
  $ jekyll serve
  ```
  ```bash
  # .. or if you're using a Gemfile (bundler)
  $ bundle exec jekyll serve
  ```

4. Point your web browser to [http://localhost:4000](http://localhost:4000/rumi-doc/)

If you're hosting your site on GitHub Pages, [set up GitHub Pages and Jekyll locally](https://help.github.com/en/articles/setting-up-your-github-pages-site-locally-with-jekyll) so that you can more easily work in your development environment.

### Configure Sloppy Doc

- [See configuration options]({% link docs/configuration.md %})

---

## About the project

Sloppy Doc is &copy; 2022-{{ "now" | date: "%Y" }} by [Ruminate Software](https://ruminatesoftware.com/).

### License

Sloppy Doc is distributed by an [MIT license](#).

### Contributing

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change. Read more about becoming a contributor in [our GitHub repo](#).

#### Thank you to the contributors of Sloppy Doc!

<ul class="list-style-none">
{% for contributor in site.github.contributors %}
  <li class="d-inline-block mr-1">
     <a href="{{ contributor.html_url }}"><img src="{{ contributor.avatar_url }}" width="32" height="32" alt="{{ contributor.login }}"/></a>
  </li>
{% endfor %}
</ul>

### Code of Conduct

Sloppy Doc is committed to fostering a welcoming community.

[View our Code of Conduct](#) on our GitHub repository.
