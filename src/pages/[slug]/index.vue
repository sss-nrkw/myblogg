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

        <div class="md" v-html="article.text" />
    </div>
</template>

<style scoped>
.main {
    margin: 20px;
    margin-top: 90px;
    padding: 20px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
    font-size: 24px;
    margin-bottom: 10px;
}

.md {
    font-size: 16px;
    line-height: 1.6;
}
.md:deep(*) {
    margin-top: 0;
    margin-bottom: 2rem;
    line-height: 1.9;
    font-size: 1.6rem;
    font-weight: 500;
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
    padding: 2% 4%;
    overflow-x: scroll;
}

.md:deep(ul) {
    list-style-type: disc;
}



/* You can add more styles as needed */
</style>
