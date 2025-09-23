import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
        <nav>
          <ul>
            <li className="mb-2">
              <Link href="/dashboard/discover" className="hover:text-gray-300">Discover</Link>
            </li>
            <li className="mb-2">
              <Link href="/dashboard/applications" className="hover:text-gray-300">My Applications</Link>
            </li>
            <li className="mb-2">
              <Link href="/dashboard/writer" className="hover:text-gray-300">AI Grant Writer</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}