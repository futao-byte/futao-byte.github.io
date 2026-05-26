import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/*.md', {
  excerpt: true,
  transform(raw) {
    return raw
      .map(page => ({
        title: page.frontmatter.title || 'Untitled',
        url: page.url,
        date: page.frontmatter.date || '1970-01-01',
        excerpt: page.excerpt || ''
      }))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  }
})
