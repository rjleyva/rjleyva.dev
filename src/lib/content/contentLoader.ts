import type { Post } from '@/types/post'
import { processedPosts } from './generatedContent'

const convertProcessedPosts = (): Post[] => {
  return processedPosts.map(
    (post: {
      title: string
      date: string
      description: string
      tags: string[]
      slug: string
      topic: string
      content: string
      htmlContent: string
      readingTime: number
    }) => ({
      ...post,
      date: new Date(post.date)
    })
  )
}

export const posts: Post[] = convertProcessedPosts()

export const getAllPosts = (): Post[] => posts

export const getPostBySlug = (topic: string, slug: string): Post | null => {
  return posts.find(post => post.topic === topic && post.slug === slug) ?? null
}
