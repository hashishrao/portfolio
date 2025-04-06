import { useEffect, useState } from "react";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/hashishrao/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <main className="min-h-screen px-6 md:px-16 py-12 bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border border-gray-300 dark:border-gray-700 rounded-xl hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">{repo.name}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {repo.description || "No description"}
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}
