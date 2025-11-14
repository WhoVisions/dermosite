# Dermosite

A modern Next.js 16 application built with React 19.2, Turbopack, and Tailwind CSS v4.1.

## Features

- **Next.js 16** with Turbopack as the default bundler
  - 2-5x faster production builds
  - 10x faster Fast Refresh during development
  - Zero-config support for CSS, React, and TypeScript
- **React 19.2** with the latest features
  - View Transitions API
  - useEffectEvent() hook
  - Activity component
  - React Compiler enabled for automatic memoization
- **TypeScript** with strict type checking
  - Typed routes for type-safe navigation
  - Route-aware type helpers (PageProps, LayoutProps)
  - End-to-end type safety
- **Tailwind CSS v4.1** with PostCSS configuration
  - Utility-first CSS framework
  - Mobile-first responsive design
  - Dark mode support
- **Modern Architecture**
  - App Router with file-based routing
  - Partial Pre-Rendering (PPR)
  - Cache Components
  - Server Components by default

## Tech Stack

- **Runtime:** Node.js v25.2.0
- **Framework:** Next.js 16
- **UI Library:** React 19.2
- **Language:** TypeScript 5.7.2
- **Styling:** Tailwind CSS v4.1
- **Bundler:** Turbopack (default in Next.js 16)
- **Package Manager:** npm

## Getting Started

### Prerequisites

- Node.js v25.2.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd dermosite
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` and add your environment variables.

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The development server uses Turbopack by default, providing:
- 10x faster Fast Refresh
- Incremental compilation
- Zero-config setup

### Build

Build the application for production:

```bash
npm run build
```

This command uses Turbopack for 2-5x faster builds.

### Start Production Server

After building, start the production server:

```bash
npm start
```

### Type Checking

Run TypeScript type checking:

```bash
npm run type-check
```

### Linting

Run ESLint:

```bash
npm run lint
```

## Project Structure

```
dermosite/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   │   └── page.tsx
│   ├── demo/              # Component demo page
│   │   └── page.tsx
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── button.tsx         # Button component
│   ├── counter.tsx        # Counter component (client)
│   ├── navigation.tsx     # Navigation component
│   └── index.ts           # Component exports
├── .env.example           # Environment variables example
├── .gitignore             # Git ignore file
├── env.d.ts               # TypeScript env definitions
├── next.config.ts         # Next.js configuration
├── package.json           # Dependencies
├── postcss.config.mjs     # PostCSS configuration
├── README.md              # This file
└── tsconfig.json          # TypeScript configuration
```

## Next.js 16 Features

### Turbopack

Turbopack is enabled by default in Next.js 16:

- **Development:** Automatic with `npm run dev`
- **Production:** Automatic with `npm run build`
- **Opt-out:** Use `--webpack` flag if needed

### Async Params and SearchParams

In Next.js 16, `params` and `searchParams` are now async and must be awaited:

```typescript
const MyPage = async ({ params, searchParams }: PageProps) => {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  // ...
};
```

### Proxy.ts (Instead of Middleware.ts)

Next.js 16 uses `proxy.ts` instead of `middleware.ts` for request interception. The proxy runs on Node.js runtime by default.

### Cache Components

Cache Components are enabled with the `"use cache"` directive for explicit caching control.

### Partial Pre-Rendering (PPR)

PPR is enabled in the configuration, allowing static pages with dynamic sections using Suspense boundaries.

## React 19.2 Features

### React Compiler

The React Compiler is enabled in `next.config.ts`, providing automatic memoization to reduce unnecessary re-renders.

### View Transitions

Use the View Transitions API for smooth page transitions between routes.

### useEffectEvent()

Use the `useEffectEvent()` hook for event handlers in effects to avoid stale closures.

## TypeScript Configuration

### Strict Mode

TypeScript strict mode is enabled with additional checks:
- `strictNullChecks`
- `noUnusedLocals`
- `noUnusedParameters`
- `noImplicitReturns`
- `noFallthroughCasesInSwitch`

### Typed Routes

Enable typed routes in `next.config.ts`:

```typescript
experimental: {
  typedRoutes: true,
}
```

This provides type-safe navigation and prevents typos in `href` props.

## Tailwind CSS v4.1

### PostCSS Configuration

Tailwind CSS v4.1 uses PostCSS configuration instead of the traditional `tailwind.config.js`:

```javascript
// postcss.config.mjs
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
```

### Import in CSS

Import Tailwind in your global CSS:

```css
@import "tailwindcss";
```

### Custom Theme

Define custom theme variables:

```css
@theme {
  /* Custom theme variables */
}
```

## Best Practices

1. **Minimize "use client"** - Favor server components for better performance
2. **Use async/await** - Always await params, searchParams, cookies(), headers(), and draftMode()
3. **Type safety** - Leverage TypeScript with strict mode and typed routes
4. **Accessibility** - Include ARIA labels, keyboard navigation, and semantic HTML
5. **Performance** - Optimize images, use dynamic imports, and leverage PPR
6. **Code style** - Use functional components, descriptive names, and early returns

## Environment Variables

Environment variables are defined in `.env.example`. Copy this file to `.env.local` for local development:

```bash
cp .env.example .env.local
```

TypeScript types for environment variables are defined in `env.d.ts`.

## Component Libraries

This project is set up to work with various component libraries:

- **Shadcn UI** - Recommended for Next.js App Router
- **Radix UI Themes** - Unstyled, accessible components
- **Headless UI** - Unstyled, accessible UI components
- **Material UI (MUI)** - Comprehensive component library
- **Ant Design** - Enterprise-class UI
- **React Bootstrap** - Bootstrap components for React
- **Hero UI** - Beautiful React components
- **React Bits** - Modern React components

Install the one(s) you need based on your project requirements.

## Learn More

- [Next.js 16 Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS v4.1 Documentation](https://tailwindcss.com/docs)
- [Turbopack Documentation](https://turbo.build/pack/docs)

## License

This project is open source and available under the MIT License.