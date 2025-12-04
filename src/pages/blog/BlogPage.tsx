import type React from 'react'
import { memo, useEffect, useState } from 'react'
import { useGetPost } from '@/hooks/useBlog'
import { getPostMetadata } from '@/lib/postFormattingUtlis'
import { renderMarkdown } from '@/services/markdownRenderingService'
import styles from './blog-page.module.css'

const BlogPage = (): React.JSX.Element => {
  const { post, loading, error } = useGetPost()
  const [enhancedContent, setEnhancedContent] =
    useState<React.JSX.Element | null>(null)

  useEffect(() => {
    const content = post?.content
    if (content != null && content.trim() !== '') {
      renderMarkdown(content)
        .then(({ dom }) => setEnhancedContent(dom))
        .catch(err => {
          console.error('Failed to render markdown:', err)
          setEnhancedContent(null)
        })
    }
  }, [post?.content])

  if (loading) {
    return (
      <article>
        <div>Loading post...</div>
      </article>
    )
  }

  if (error != null || !post) {
    return (
      <section>
        <h1>Post Not Found</h1>
        <p>The blog post you&apos;re looking for doesn&apos;t exist.</p>
      </section>
    )
  }

  const { date, dateTime, readingTime } = getPostMetadata(post)

  return (
    <article>
      <header className={styles['blog-page__header']}>
        <h1 className={`${styles['blog-page__title']} title-large-gradient`}>
          {post.title}
        </h1>
        <div className={styles['blog-page__metadata']}>
          <time dateTime={dateTime} className={styles['blog-page__date']}>
            {date}
          </time>
          <span className={styles['blog-page__reading-time']}>
            {readingTime}
          </span>
        </div>
      </header>

      <div className={styles['blog-page__content']}>
        <div className="markdown-content">
          {enhancedContent ?? <div>Content loading...</div>}
        </div>
      </div>
    </article>
  )
}

export default memo(BlogPage)
