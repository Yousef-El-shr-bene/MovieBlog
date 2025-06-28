'use client';

import { useState } from 'react';
import { ArticleCard } from "../../components/ArticleCard";

const allArticles = [
  {
    title: "Dune: Part Two Breaks Box Office Records",
    excerpt: "The sci-fi sequel dominates global ticket sales on opening weekend.",
    imageUrl: "/dune2.jpg",
    slug: "dune-part-two-box-office",
    category: "Sci-Fi"
  },
  {
    title: "Inside the Making of Furiosa",
    excerpt: "A behind-the-scenes look at the latest Mad Max prequel.",
    imageUrl: "/furiosa.jpg",
    slug: "making-of-furiosa",
    category: "Action"
  }
];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const filtered = allArticles.filter(article =>
    article.title.toLowerCase().includes(query.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Search Articles</h1>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 border rounded mb-6"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
        {filtered.length === 0 && (
          <p className="text-gray-500">No articles found.</p>
        )}
      </div>
    </div>
  );
}
