import './globals.css';
import { ThemeProvider } from 'next-themes';
import ThemeToggle from '../components/ThemeToggle';
import Link from 'next/link';

export const metadata = {
  title: 'Hashish Raghavendra | Portfolio',
  description: 'Portfolio website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="flex justify-between items-center px-6 py-4 border-b dark:border-gray-700">
            <h1 className="text-2xl font-bold">Hashish Raghavendra</h1>
            <ThemeToggle />
          </header>
          <nav className="px-6 py-2 space-x-4 border-b dark:border-gray-700">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <main className="px-6 md:px-16 py-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
