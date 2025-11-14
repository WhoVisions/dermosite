import Link from 'next/link';

const AboutPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24">
      <div className="max-w-4xl w-full space-y-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          tabIndex={0}
          aria-label="Go back to home"
        >
          <span>←</span>
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">About This Project</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Learn about the modern technologies powering this application
          </p>
        </header>

        {/* Content Sections */}
        <section className="space-y-6">
          <ContentSection
            title="Next.js 16 Features"
            items={[
              'Turbopack as default bundler for 2-5x faster production builds',
              'Up to 10x faster Fast Refresh during development',
              'Zero-config support for CSS, React, and TypeScript',
              'Built-in support for CSS Modules, Tailwind CSS, and PostCSS',
              'Proxy.ts instead of middleware.ts for request interception',
              'Cache Components with "use cache" directive',
              'Partial Pre-Rendering (PPR) with Suspense boundaries',
            ]}
          />

          <ContentSection
            title="React 19.2 Features"
            items={[
              'View Transitions API for smooth page transitions',
              'useEffectEvent() hook for event handlers in effects',
              'Activity component for loading states and transitions',
              'React Compiler for automatic memoization',
              'Enhanced server components capabilities',
            ]}
          />

          <ContentSection
            title="TypeScript Configuration"
            items={[
              'Strict type checking enabled',
              'Typed routes for type-safe navigation',
              'Route-aware type helpers (PageProps, LayoutProps)',
              'Typed environment variables support',
              'Incremental type checking for faster builds',
              'End-to-end type safety in App Router',
            ]}
          />

          <ContentSection
            title="Tailwind CSS v4.1"
            items={[
              'PostCSS-based configuration',
              'Utility-first CSS framework',
              'Mobile-first responsive design',
              'Dark mode support built-in',
              'Custom theme variables support',
            ]}
          />
        </section>

        {/* Best Practices Section */}
        <section className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 border border-green-200 dark:border-green-800">
          <h2 className="text-2xl font-bold mb-4">Best Practices Implemented</h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
              <span>
                <strong>Async params and searchParams:</strong> Always await params and searchParams
                in page components following Next.js 16 requirements
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
              <span>
                <strong>Functional components:</strong> Use functional programming patterns with
                TypeScript interfaces
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
              <span>
                <strong>Accessibility:</strong> Proper ARIA labels, keyboard navigation support, and
                semantic HTML
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
              <span>
                <strong>Performance optimization:</strong> Minimize "use client", leverage server
                components, and use Suspense for loading states
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
              <span>
                <strong>Type safety:</strong> Strict TypeScript configuration with typed routes and
                route-aware helpers
              </span>
            </li>
          </ul>
        </section>

        {/* Back Button */}
        <div className="text-center pt-8">
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            tabIndex={0}
            aria-label="Return to home page"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

interface ContentSectionProps {
  title: string;
  items: string[];
}

const ContentSection = ({ title, items }: ContentSectionProps) => {
  return (
    <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutPage;
