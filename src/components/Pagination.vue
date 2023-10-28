<!-- src/components/Pagination.vue -->
<script setup lang="ts">

type Props = {
    numPages: number;
    current: number;
}

const { numPages, current } = defineProps<Props>();

// ページリンクを返す
function getPath(p: number) {
    return `/page/${p}`
}

// クラスを返す
// 現在のページの場合スタイルをかえるため
function getClass(page: number, current: number) {
    if (page == current) return 'current'
    return 'link'
}

</script>

<template>
    <div class="pagination">
        <NuxtLink v-for="page in numPages" :key="page" :class="getClass(page, current)" :to="getPath(page)">
            {{ page }}
        </NuxtLink>
    </div>
</template>

<style scoped>
.pagination {
    position: relative;
    width: 100%;
    margin-top: 90px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    text-align: center;
    vertical-align: middle;
}

.current,
.link {

    margin: 0 2rem;

    font-size: 3rem;

}

.current {
    color: #000;
}

.link {
    color: #A2A2A6;
}
</style>