<script setup lang="ts">
import { Post } from '../types/blog'

type Props = {
    posts: Post[];
}

const { posts } = defineProps<Props>()
</script>

<template>
  <div>
    <article class="article" v-for="post in posts" :key="post.id">
      <span class="published">{{ post.publishedAt }}</span>
      <span class="tag" v-for="tag in post.tags" :key="tag.id">{{ tag.name }}</span>
      <nuxt-link :to="`/${post.id}`">
        <h1 class="title">{{ post.title }}</h1>
      </nuxt-link>
    </article>
  </div>
</template>

<style scoped>
.article {
  margin-top: 1rem;
  margin-bottom: 6rem;
  width: 100%;
  align-items: center;
}

.published {
  font-size: 1.4rem;
  color: #888;
  margin-right: 20px;
}

.tag {
  font-size: 1.4rem;
  color: #0d1a3c;
  margin-right: 10px;
}

.title {
  margin-top: 6px;
  font-size: 2.8rem;
  color: #0d1a3c;
  line-height: 1.6;
  font-weight: bold;
}
</style>
