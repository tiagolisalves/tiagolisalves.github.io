const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/home/13766841793/Área de Trabalho/2020/tiagolisalves.github.io/src/templates/blog-post.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/13766841793/Área de Trabalho/2020/tiagolisalves.github.io/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/13766841793/Área de Trabalho/2020/tiagolisalves.github.io/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/13766841793/Área de Trabalho/2020/tiagolisalves.github.io/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/home/13766841793/Área de Trabalho/2020/tiagolisalves.github.io/src/pages/page-2.js")))
}

