<script setup lang="ts">
import { MicroCMSQueries } from 'microcms-js-sdk';

type Props = {
    page: number,
}

const { page } = defineProps<Props>()

const limit = 15

const queries: MicroCMSQueries = {
    limit: limit,
    offset: (page - 1) * limit,
}

const { data: posts } = await useFetch('/api/postList', { params: queries })

const numPages = Math.ceil(posts.value.totalCount / limit)

</script>

<template>
    <Pagination :numPages="numPages" :current="page" />
    <div>
        <div class="divider">
            <section class="container">
                <!-- 記事一覧 -->
                <PostList :posts="posts.contents" />
            </section>
            <aside class="aside">
                <!-- キーワード検索、タグ一覧 -->
            </aside>
        </div>
        <!-- 追加 -->
    </div>
</template>

<style scoped>
.divider {
    display: flex;
    justify-content: space-between;
    margin-top: 90px;
    margin-left: 30px;

}
</style>
