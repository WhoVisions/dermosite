import Link from 'next/link';
import { Counter, Button } from '@/components';

interface PageProps {
  params: Promise<Record<string, string>>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

const DemoPage = async ({ searchParams }: PageProps) => {
  // In Next.js 16, searchParams must be awaited
  const resolvedSearchParams = await searchParams;

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
          <h1 className="text-4xl md:text-5xl font-bold">Component Demo</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Interactive examples of reusable components
          </p>
        </header>

        {/* Components Section */}
        <section className="space-y-8">
          {/* Counter Component */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Client Component Example</h2>
            <p className="text-gray-600 dark:text-gray-400">
              This counter demonstrates a client component using the "use client" directive,
              React hooks (useState), and event handlers.
            </p>
            <Counter initialCount={0} />
          </div>

          {/* Button Variants */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Button Component Variants</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Reusable button component with different variants and sizes.
            </p>
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <div className="space-y-6">
                {/* Primary Buttons */}
                <div className="space-y-3">
                  <h3 className="text-lg font-medium">Primary Buttons</h3>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="primary" size="sm">
                      Small
                    </Button>
                    <Button variant="primary" size="md">
                      Medium
                    </Button>
                    <Button variant="primary" size="lg">
                      Large
                    </Button>
                    <Button variant="primary" size="md" disabled>
                      Disabled
                    </Button>
                  </div>
                </div>

                {/* Secondary Buttons */}
                <div className="space-y-3">
                  <h3 className="text-lg font-medium">Secondary Buttons</h3>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="secondary" size="sm">
                      Small
                    </Button>
                    <Button variant="secondary" size="md">
                      Medium
                    </Button>
                    <Button variant="secondary" size="lg">
                      Large
                    </Button>
                    <Button variant="secondary" size="md" disabled>
                      Disabled
                    </Button>
                  </div>
                </div>

                {/* Outline Buttons */}
                <div className="space-y-3">
                  <h3 className="text-lg font-medium">Outline Buttons</h3>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" size="sm">
                      Small
                    </Button>
                    <Button variant="outline" size="md">
                      Medium
                    </Button>
                    <Button variant="outline" size="lg">
                      Large
                    </Button>
                    <Button variant="outline" size="md" disabled>
                      Disabled
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Code Example */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Usage Example</h2>
            <div className="p-6 rounded-xl bg-gray-900 text-gray-100 overflow-x-auto">
              <pre className="text-sm">
                <code>{`import { Button, Counter } from '@/components';

const MyComponent = () => {
  return (
    <>
      <Button variant="primary" size="md" onClick={handleClick}>
        Click Me
      </Button>

      <Counter initialCount={0} />
    </>
  );
};`}</code>
              </pre>
            </div>
          </div>
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

export default DemoPage;
