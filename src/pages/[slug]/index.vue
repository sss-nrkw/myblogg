<script setup lang="ts">

const route = useRoute();
const slug = String(route.params.slug);

const { data: article } = await useFetch(`/api/postDetail`, {
    params: { slug: slug },
});

if (!article.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

</script>

<template>
    <div class="main">
        <h1 class="title">{{ article.title }}</h1>
        <div class="md" v-html="article.text" />
    </div>
</template>

<style scoped>
.main {
    position: relative;
    max-width: 100%;
    width: 100%;
    padding: 5% 2%;
    color: #0d1a3c;
}

.published {
    font-size: 1.4rem;
    color: #888;
    margin-right: 2%;
}

.title {
    margin-top: 10px;
    margin-bottom: 5%;
    font-size: 2.4rem;
    color: #0d1a3c;
    line-height: 1.6;
}

.tag {
    font-size: 1.4rem;
    color: 888;
    opacity: 0.7;
    letter-spacing: 1px;
    margin-right: 5%;
}

.md:deep(*) {
    margin-top: 0;
    margin-bottom: 2%;
    line-height: 1.9;
    font-size: 1.6rem;
    font-weight: 500;
}

.md:deep(img) {
    display: block;
    max-width: 100%;
    margin-top: 5%;
    margin-bottom: 0;
    height: auto;
    border: solid 1px #ccc;
}

@media (max-width: 1024px) {
    .md:deep(img) {
        max-width: 100%;
    }
}

.md:deep(p) code {
    background-color: #eee;
    color: #333;
    padding: 0.2em 0.4em;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
}

.md:deep(pre) {
    line-height: 1.2;
    background-color: #1D1F21;
    padding: 5% 2%;
    overflow-x: scroll;
}

.md:deep(pre) * {
    margin-bottom: 0;
    line-height: 1.4;
    font-weight: lighter;
}

.md:deep(blockquote) {
    padding: 5%;
    border-left: 5px solid #ccc;
    border-radius: 2px;
}

.md:deep(h1) {
    font-size: 24px;
    border-bottom: 1px solid #ccc;
    font-weight: bold;
    margin-top: 5%;
    margin-bottom: 5%;
}

.md :deep(h2),
.md:deep(h3) {
    font-size: 20px;
    margin-top: 5%;
    margin-bottom: 5%;
    font-weight: bold;
}

.md:deep(h2) {
    border-bottom: 1px solid #ccc;
}

.md:deep(.cp_embed_wrapper) {
    margin-top: 5%;
    margin-bottom: 5%;
}

.md:deep(a) {
    color: #1266f1;
}

.md:deep(a:hover) {
    opacity: .5;
}

.md:deep(ul),
.md:deep(ol) {
    padding-left: 1.5em;
    margin: 5% 0;
    line-height: 1.7;
}

.md:deep(ul) {
    list-style-type: disc;
}

.md:deep(ol) {
    list-style-type: decimal;
}

.md:deep(ul) li,
.md:deep(ol) li {
    margin-bottom: 5%;
}
</style>
