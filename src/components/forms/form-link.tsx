import Link from 'next/link';

export default function FormLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm font-semibold text-indigo-600 hover:text-indigo-500 focus-visible:rounded focus-visible:underline focus-visible:decoration-2 focus-visible:underline-offset-4 focus-visible:outline-none"
    >
      {children}
    </Link>
  );
}
