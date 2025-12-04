import type React from 'react'
import { memo, useEffect, useState } from 'react'
import { useGetPost } from '@/hooks/useBlog'
import { getPostMetadata } from '@/lib/postFormattingUtlis'
import { renderMarkdown } from '@/services/markdownRenderingService'
import styles from './blog-page.module.css'

const BlogPage = (): React.JSX.Element => {
  const { post, loading, error } = useGetPost()
  const [contentState, setContentState] = useState<{
    content: React.JSX.Element | null
    error: string | null
    isLoading: boolean
  }>({ content: null, error: null, isLoading: false })

  useEffect(() => {
    const content = post?.content

    if (content != null && content.trim() !== '') {
      renderMarkdown(content)
        .then(({ dom }) => {
          setContentState({ content: dom, error: null, isLoading: false })
        })
        .catch(err => {
          console.error('Failed to render markdown:', err)
          setContentState({
            content: null,
            error: 'Failed to render content',
            isLoading: false
          })
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
          {contentState.error != null ? (
            <div className="error-message">{contentState.error}</div>
          ) : (
            (contentState.content ?? <div>Content loading...</div>)
          )}
        </div>
      </div>
    </article>
  )
}

export default memo(BlogPage)
