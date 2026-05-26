<script setup>
import { data } from '../../posts.data.js'
</script>

<template>
  <div class="posts-section">
    <div v-if="!data || data.length === 0" class="empty-state">
      <p>NO POSTS FOUND</p>
      <p class="hint">Add .md files to /docs/posts/</p>
    </div>

    <div v-else class="posts-grid">
      <article v-for="post in data" :key="post.url" class="post-card">
        <a :href="post.url" class="post-link">
          <h2 class="post-title">{{ post.title }}</h2>
          <div class="post-meta">
            <time class="post-date">{{ formatDate(post.date) }}</time>
            <span class="post-divider">|</span>
            <span class="read-more">READ</span>
          </div>
          <p class="post-excerpt">{{ post.excerpt }}</p>
        </a>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    formatDate(dateStr) {
      if (!dateStr) return '----.--.--'
      const date = new Date(dateStr)
      return date.toISOString().split('T')[0]
    }
  }
}
</script>

<style scoped>
.posts-section {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.empty-state {
  text-align: center;
  padding: 4rem 0;
  color: #808090;
  font-family: 'Fira Code', monospace;
}

.empty-state p {
  margin: 0.5rem 0;
}

.empty-state .hint {
  color: #505060;
  font-size: 0.85rem;
}

.posts-grid {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.post-card {
  position: relative;
  background: rgba(12, 12, 28, 0.6);
  backdrop-filter: blur(14px) saturate(160%);
  -webkit-backdrop-filter: blur(14px) saturate(160%);
  border: 1px solid rgba(0, 255, 204, 0.2);
  border-radius: 12px;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 255, 204, 0.08);
  overflow: hidden;
}

.post-card:hover {
  border-color: rgba(0, 255, 204, 0.6);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 255, 204, 0.2), 0 0 60px rgba(0, 255, 204, 0.08);
  transform: translateY(-3px);
}

.post-link {
  display: block;
  padding: 1.75rem 2rem;
  text-decoration: none;
  color: inherit;
}

.post-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #00ffcc;
  margin: 0 0 0.6rem;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
}

.post-card:hover .post-title {
  text-shadow: 0 0 12px rgba(0, 255, 204, 0.7), 0 0 30px rgba(0, 255, 204, 0.3);
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.8rem;
}

.post-date {
  font-family: 'Fira Code', monospace;
  font-size: 0.8rem;
  color: #ff00ff;
  letter-spacing: 0.5px;
}

.post-divider {
  color: #404060;
  font-size: 0.8rem;
}

.read-more {
  font-family: 'Fira Code', monospace;
  font-size: 0.75rem;
  color: #00ffcc;
  letter-spacing: 2px;
  opacity: 0;
  transform: translateX(-5px);
  transition: all 0.3s ease;
}

.post-card:hover .read-more {
  opacity: 1;
  transform: translateX(0);
}

.post-excerpt {
  color: #a0a0b8;
  line-height: 1.6;
  font-size: 1rem;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 640px) {
  .post-link {
    padding: 1.25rem 1.5rem;
  }
  .post-title {
    font-size: 1.2rem;
  }
  .posts-grid {
    gap: 1.25rem;
  }
}
</style>
