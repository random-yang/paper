<h1 align="center">paper</h1>

<p align="center">🎨 paper 是一个简洁，没有过多冗余视觉元素和功能的 hexo 主题，其设计风格的灵感来源于📰 <strong>报纸</strong>等纸质读物。而且主题以一种💡<strong>极其巧妙</strong>的方式实现了当下(2019)流行的🌗<strong>Dark Mode</strong>，一键可开启。</p>

![landing](https://source-hosting.oss-cn-shanghai.aliyuncs.com/Paper-showcase-min.png)

## 如何使用
#### 安装
```bash
# 在你的 hexo 顶层文件夹下
cd theme
# clone 该项目
git clone git@github.com:OfficialYoungX/paper.git
```

```bash
# 在你的 _config,yml 文件中设置
theme: paper
# 同时为了代码高亮，你需要将下面的内容粘贴到该文件
highlight:
  hljs: true
  enable: true
  line_number: false
  auto_detect: true
  tab_replace: ''
```
```bash
# 清空并重新编译
hexo clear && hexo s
# done
# 在临时开启的本地server中你应该能看见应用了paper主题的blog！
```
#### 配置项
在 `theme/paper` 目录下的 `_config.yml` 文件中进行配置
- 社交账号

除了提供的，您还可以添加其他未列出的

```bash
social:
  Github: https://github.com/yours
  Codepen: https://codepen.io/yours
  Dribbble: https://dribbble.com/yours
  twitter: https://twitter.com/yours
  知乎: https://www.zhihu.com/people/yours
  掘金: https://juejin.im/user/yours
  # ...
  # and more, you can add other link by the same way
```
- 主题色

```bash
main_color: default # forest | grass | sky | sun | sea
```
这里提供了6种可通过直接配置修改的颜色，当然，如果您都不喜欢，可以自己进入`themes/paper/source/css/var.styl`修改变量渲染出你想要的颜色。

- 右边栏可见内容

取消注释则表示关闭该内容

```bash
# Uncomment to disable sidebar
# link: false
# archives: false
# categories: false
# tags: false
```

## 效果预览
- DarkMode
![](https://source-hosting.oss-cn-shanghai.aliyuncs.com/paper-github-3-min.png)

- multiple colors
![](https://source-hosting.oss-cn-shanghai.aliyuncs.com/paper-github-4-min.png)

- Resposive
  ![](https://source-hosting.oss-cn-shanghai.aliyuncs.com/paper-github-1-min.png)
  ![](https://source-hosting.oss-cn-shanghai.aliyuncs.com/paper-github-2-min.png)