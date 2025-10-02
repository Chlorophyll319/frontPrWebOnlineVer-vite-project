import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

// 先創建基本的 markdown-it 實例
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  breaks: true,
  langPrefix: 'language-',
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre><code class="hljs language-${lang}">${hljs.highlight(str, { language: lang, ignoreIllegals: true }).value}</code></pre>`
      } catch (error) {
        console.log(error)
      }
    }
    return `<pre><code class="hljs">${md.utils.escapeHtml(str)}</code></pre>`
  },
})

// 動態加載插件
let pluginsLoaded = false

async function loadPlugins() {
  if (pluginsLoaded) return

  try {
    // 嘗試加載插件
    const emojiPlugin = await import('markdown-it-emoji')
    const footnotePlugin = await import('markdown-it-footnote')
    const taskListsPlugin = await import('markdown-it-task-lists')
    const tocPlugin = await import('markdown-it-toc-done-right')

    // 使用插件
    md.use(emojiPlugin.default || emojiPlugin)
    md.use(footnotePlugin.default || footnotePlugin)
    md.use(taskListsPlugin.default || taskListsPlugin, { enabled: true })
    md.use(tocPlugin.default || tocPlugin, {
      containerClass: 'toc',
      listType: 'ul',
      level: [1, 2, 3, 4],
    })

    pluginsLoaded = true
  } catch (error) {
    console.warn('某些 markdown 插件無法載入，將使用基本功能:', error.message)
    pluginsLoaded = true
  }
}

export default {
  async render(markdown) {
    if (!markdown) return ''

    await loadPlugins()
    return md.render(markdown)
  },
}
