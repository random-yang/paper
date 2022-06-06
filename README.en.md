<h1 align="center">paper</h1>

<p align="center">🎨 paper is a concise hexo theme with no redundant visual elements and functions. Its design style is inspired by paper readings such as 📰 <strong>newspaper</strong>. And the theme implements the current (2019) popular 🌗<strong>Dark Mode</strong> in a 💡<strong>extremely clever</strong> way, which can be enabled with one click. </p>

![landing](https://source-hosting.oss-cn-shanghai.aliyuncs.com/Paper-showcase.png)

## Table of Contents

- [How to use](#how-to-use)
    - [Installation](#installation)
    - [Configuration items](#configuration-items)
- [Effect preview](#effect-preview)
- [Update](#update)
- [Porting version](#porting-version)
- [Todo](#todo)
- [Participate](#participate)
- [LICENCE](#licence)

Created by [gh-md-toc](https://github.com/ekalinin/github-markdown-toc)

## How to use

#### Installation

```bash
# Under your hexo top-level folder
cd themes
# clone the project
git clone git@github.com:random-yang/paper.git
```

Install stylus and pug conversion tools (due to hexo init, the following two may not be installed by default)

```
npm install hexo-renderer-jade hexo-renderer-stylus --save
```

Modify the configuration file

```bash
# Set in your _config.yml file
theme: paper
# At the same time in order to highlight the code, you need to paste the following content into the file (if there is a highlight field before, remember to delete it and paste it)
highlight:
  hljs: true
  enable: true
  line_number: false
  auto_detect: true
  tab_replace:''
```

```bash
# Clear and recompile
hexo clean && hexo s
# done
# In the temporarily opened local server, you should be able to see the blog with the paper theme applied!
```

#### Configuration items

Configure in the `_config.yml` file under the `theme/paper` directory

- Social accounts

```bash
social:
  Github: https://github.com/yours
  Codepen: https://codepen.io/yours
  Dribbble: https://dribbble.com/yours
  twitter: https://twitter.com/yours
  Know: https://www.zhihu.com/people/yours
  Nuggets: https://juejin.im/user/yours
  Mail: mailto:xxx@yourmail.xxxx
  Rss: your-rss-link-url
  # ...
  # and more, you can add other link by the same way
```

In addition to the provided, you can also add other unlisted

- Theme color

```bash
main_color: default # forest | grass | sky | sun | sea
```

Here are 6 colors that can be modified through direct configuration. Of course, if you don’t like it, you can enter `themes/paper/source/css/var.styl` to modify the variable to render the color you want.

- Visible content in the right column

Uncomment means to close the content

```bash
# Uncomment to disable sidebar
# toc: false
# link: false
# archives: false
# categories: false
# tags: false
```

- posts list preview post pictures

Write in the head of the article markdown:

```bash
photos:
-your-images-url
# The following pictures will be ignored
#-...
#-...
```

By default, only the first url in the list will be taken, and the following will be ignored.

- google Analytics

```bash
# Google Analytics
google_analytics_id: xx-xxxxxxx-xx
```

- Top article

Write in the head of the article markdown:

```bash
top: true
```

- Add Rss subscription

According to the guidance of [hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed), generate the `atom.xml` file, and then configure it in `themes/paper/_config.yml`

```bash
social:
  -Rss: your-rss-link-url
```

- Comment module configuration

```bash
# comment module
comment:
  enable: false # true to enable
  type: valine # value: valine | utterances

  # valine params
  appId: your-app-id
  appKey: your-app-key
  placeholder: say something
  notify: false
  verify: false
  avatar: mp

  # utterances (https://utteranc.es/) params
  repo: your github repo path which supports comment
  issue_term: your issue term
  theme: comment theme
```

- Open math formula

1. Uninstall hexo-math
```bash
npm uninstall hexo-math
```
2. Uninstall hexo-renderer-marked
```bash
npm uninstall hexo-renderer-marked
```
3. Install hexo-renderer-kramed
```bash
npm install hexo-renderer-kramed --save
```
4. Update _config.yml
```bash
# Add to
math:
  engine:'mathjax'
  mathjax:
    enable: true
    cdn: https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-MML-AM_CHTML
```
5. Finally
```
hexo clean
hexo server
```

## Effect preview

- DarkMode
  ![](https://source-hosting.oss-cn-shanghai.aliyuncs.com/paper-github-3.png)

- Multiple colors
  ![](https://source-hosting.oss-cn-shanghai.aliyuncs.com/paper-github-4.png)

- Resposive
  ![](https://source-hosting.oss-cn-shanghai.aliyuncs.com/paper-github-1.png)
  ![](https://source-hosting.oss-cn-shanghai.aliyuncs.com/paper-github-2.png)

## Update

```bash
cd themes/paper
git pull
```

## Porting version

- [halo-theme-paper](https://github.com/halo-dev/halo-theme-paper)

## Todo

- [x] Ported to [other blogging platforms] (## transplant version) (the design is reusable)
- [x] Article list
- [x] Chrome mobile tab color
- [x] Google Analytics
- [x] Optimize SEO
- [x] Optimize [Audit](https://web.dev/measure/) test performance
- [x] The posts picture of the home page (parameters can be configured)
- [x] Top of article (I only realized that the top feature is very important recently)
- [x] RSS subscription function
- [x] Latex
- [ ] Picture zooming
- [x] Determine whether to add a comment system based on the situation (the comment system is suitable for users to decide to use third-party comment plugins)
- [ ] Global search
- [ ] Optimized layout and subdivision fonts

## Participate

I personally read a lot of other themes and found that many have very rich functions. Due to the limited energy of the individual, only the main basic functions have been realized for this theme, which meets my basic requirements for vision. Other more features or suggestions for visual details are welcome to pr, issue🤟🏼.

## LICENCE

MIT
