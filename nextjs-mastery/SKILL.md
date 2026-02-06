---
name: nextjs-mastery
description: High-performance Next.js architectures.
version: 1.1.0
author: Sovereign OS Agent
tags: [nextjs, react, ssr, frontend, performance]
---

# ⚡ Next.js Mastery

## 1. Core Philosophy (The "Why")
Next.js is React with superpowers: SSR, SSG, ISR, API Routes. We leverage these to build fast, SEO-friendly, scalable web apps. Performance is not optional.

## 2. Capabilities & Rules (The "What")

### Rule 1: Rendering Strategies
- **SSG (Static)**: Use for content that rarely changes (Blog, Docs). Build-time generation.
- **SSR (Server)**: Use for personalized content (Dashboard). Request-time generation.
- **ISR (Incremental)**: Use for semi-static content (Product Pages). Revalidate on interval.
- **CSR (Client)**: Use for highly interactive UI (Charts). Fetch client-side.

### Rule 2: Data Fetching
- **getStaticProps**: SSG. Runs at build time.
- **getServerSideProps**: SSR. Runs on every request.
- **SWR/React Query**: CSR. Client-side caching.

### Rule 3: Performance
- **Image Optimization**: Use `next/image` (automatic WebP, lazy load).
- **Code Splitting**: Automatic per-page. Use `dynamic()` for heavy components.
- **Fonts**: Use `next/font` to eliminate layout shift.

## 3. Usage Instructions (The "How")

### SSG Page
```typescript
export async function getStaticProps() {
  const data = await fetchData();
  return { props: { data }, revalidate: 60 }; // ISR: Revalidate every 60s
}
```

## 4. Maintenance
- **Audit**: Run Lighthouse. Target: Performance > 90.
- **Bundle**: Analyze with `@next/bundle-analyzer`.
