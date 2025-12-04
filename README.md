# rjleyva-writes

RJ Leyva's personal blog, documenting web development insights through writing.

---

## Current Status (WIP)

![rjleyva.dev-screenshot](./images/rjleyva.dev-screenshot.jpeg)

## TODO - Performance Optimizations

- [ ] Implement React.lazy() for route-based code splitting to reduce initial bundle size
- [ ] Add image optimization with lazy loading and WebP format support
- [ ] Implement service worker for static asset caching and offline support
- [x] Add React.memo() and useMemo() to prevent unnecessary re-renders
- [x] **Change markdown approach**: Replace dual-processing (build-time HTML +
      runtime React) with single-pass approach - either use pre-rendered HTML with
      dangerouslySetInnerHTML or optimize React-based rendering with proper caching
- [x] Optimize markdown rendering performance with caching strategies
- [ ] Add preload hints for critical resources and routes

## Current Project Structure

```
rjleyva.dev/
| .git/
| .jj/
| dist/
| images/
| | rjleyva.dev-screenshot.jpeg
| node_modules/
| scripts/
| | generateContentImports.ts
| src/
| | components/
| | | icons/
| | | | CheckIcon.tsx
| | | | CopyIcon.tsx
| | | | GithubIcon.tsx
| | | | InstagramIcon.tsx
| | | | LinkedinIcon.tsx
| | | | Logo.tsx
| | | | MoonIcon.tsx
| | | | SunIcon.tsx
| | | ui/
| | | | BlogCard/
| | | | | BlogCard.tsx
| | | | | blog-card.module.css
| | | | BlogPosts/
| | | | | BlogPosts.tsx
| | | | | blog-posts.module.css
| | | | CodeBlock/
| | | | | CodeBlock.tsx
| | | | | code-block.module.css
| | | | Header/
| | | | | Header.tsx
| | | | | header.module.css
| | | | Hero/
| | | | | Hero.tsx
| | | | | hero.module.css
| | | | RecentPost/
| | | | | RecentPost.tsx
| | | | | recent-post.module.css
| | | | Socials/
| | | | | Socials.tsx
| | | | | socials.module.css
| | | | ThemeToggle/
| | | | | ThemeToggle.tsx
| | | | | theme-toggle.module.css
| | constants/
| | | socialLinks.ts
| | | theme.ts
| | content/
| | | blog/
| | | | jj/
| | | | | how-i-use-jujutsu.md                  # Sample post
| | | | react/
| | | | | how-i-structure-a-vite-react-blog.md  # Sample post
| | contexts/
| | | ThemeProvider.tsx
| | | themeContext.ts
| | hooks/
| | | useBlog.ts
| | | useClipboard.ts
| | | useTheme.ts
| | layouts/
| | | MainLayout.tsx
| | | home-layout.module.css
| | lib/
| | | content/
| | | | contentLoader.ts
| | | | generatedContent.ts
| | | blogContentApi.ts
| | | mardownRender.ts
| | | postFormattingUtlis.ts
| | pages/
| | | blog/
| | | | BlogPage.tsx
| | | | blog-page.module.css
| | | home/
| | | | HomePage.tsx
| | routes/
| | | routes.tsx
| | services/
| | | markdownRenderingService.ts
| | styles/
| | | globals.css
| | | themes.css
| | | tokens.css
| | types/
| | | css-module.d.ts
| | | icons.ts
| | | post.ts
| | | theme.ts
| | utils/
| | | reactNodeUtils.ts
| | main.tsx
| | vite-env.d.ts
| .gitignore
| LICENSE
| README.md
| eslint.config.js
| index.html
| package.json
| pnpm-lock.yaml
| prettier.config.ts
| tsconfig.app.json
| tsconfig.json
| tsconfig.node.json
| vite.config.ts
```

## Tech Stack

### Core Framework & Language

- React 19+
- TypeScript 5+
- Vite 7+

### Routing

- React Router v7 (data-mode)

### Styling

- Modern Normalize
- CSS Modules with BEM methodology
- CSS custom properties for theming

### Development Tools

- ESLint with React plugins
- Prettier with import sorting
- TypeScript for type checking

### Key Dependencies

- @vitejs/plugin-react
- eslint-plugin-react-refresh
- modern-normalize

## License

MIT License.

If you find this project helpful, please consider giving it a ⭐.
