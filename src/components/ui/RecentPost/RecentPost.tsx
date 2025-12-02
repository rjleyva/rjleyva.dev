import type React from 'react'
import { processedPosts } from '@/lib/content/generatedContent'
import type { Post } from '@/types/post'
import BlogCard from '../BlogCard/BlogCard'
import styles from './recent-post.module.css'

const RecentPost = (): React.JSX.Element => {
  const recentPosts: Post[] = processedPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)
    .map(post => ({
      ...post,
      date: new Date(post.date)
    }))

  return (
    <section aria-label="recent-posts-heading">
      {recentPosts.length > 0 && (
        <div className={styles['recent-post']}>
          <h2 className="section-title" id="recent-posts-heading">
            Recent Posts
          </h2>
          <div className="blog-grid">
            {recentPosts.map((post: Post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default RecentPost
