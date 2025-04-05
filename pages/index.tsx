import Link from 'next/link';
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
  return (
    <main className="min-h-screen px-6 md:px-16 py-12 bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold">Hashish Raghavendra</h1>
        <ThemeToggle />
      </div>
      <p className="text-lg leading-relaxed mb-4">Computer Science Student | Intern @ PwC & Prodigy InfoTech | Salesforce Trainee</p>
      <nav className="space-x-4 mt-6">
        <Link href="/about" className="text-blue-600 dark:text-blue-400 hover:underline">About</Link>
        <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:underline">Projects</Link>
        <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">Contact</Link>
      </nav>
    </main>
  );
}
