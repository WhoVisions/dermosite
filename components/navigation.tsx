import Link from 'next/link';

interface NavigationProps {
  className?: string;
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      tabIndex={0}
    >
      {children}
    </Link>
  );
};

export const Navigation = ({ className = '' }: NavigationProps) => {
  return (
    <nav className={`flex items-center gap-2 ${className}`}>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
    </nav>
  );
};
