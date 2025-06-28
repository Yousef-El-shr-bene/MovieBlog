import Link from "next/link";

interface ArticleCardProps {
  article: {
    title: string;
    excerpt: string;
    imageUrl: string;
    slug: string;
  };
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={`/${article.slug}`}
      className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
    >
      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
        <p className="text-sm text-gray-600">{article.excerpt}</p>
      </div>
    </Link>
  );
}
