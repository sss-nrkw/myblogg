// src/server/api/postDetail.ts
import client from './client'
import { Post } from '../../types/blog'

export default defineEventHandler(async (event) => {
    const params = getQuery(event)
    const slug = params.slug
    const data = client.getListDetail<Post>({
        endpoint: 'post',
        contentId: String(slug),
    })
    return data
})