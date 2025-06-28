import { ArticleCard } from "../components/ArticleCard";

const sampleArticles = [
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

export const metadata = {
  title: "Latest Movie News | MovieBlog",
  description: "Catch up on the latest headlines from the world of cinema.",
  openGraph: {
    title: "Latest Movie News | MovieBlog",
    description: "Catch up on the latest headlines from the world of cinema.",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "MovieBlog OG Image"
      }
    ]
  }
};

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Latest Movie News</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {sampleArticles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}