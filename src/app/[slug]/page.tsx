import { Metadata } from "next";
import Image from "next/image";



type ArticleKey = "dune-part-two-box-office" | "making-of-furiosa";

const sampleArticles: Record<ArticleKey, {
  title: string;
  content: string;
  imageUrl: string;
}> = {
  "dune-part-two-box-office": {
    title: "Dune: Part Two Breaks Box Office Records",
    content: `Dune: Part Two has taken the global box office by storm, surpassing expectations in both the domestic and international markets. With stunning visuals and a compelling storyline, the film continues the saga of Paul Atreides as he joins forces with the Fremen to bring justice to Arrakis.`,
    imageUrl: "/dune2.jpg"
  },
  "making-of-furiosa": {
    title: "Inside the Making of Furiosa",
    content: `Go behind the scenes of the highly anticipated Furiosa, the latest installment in the Mad Max franchise. Discover how the filmmakers brought the post-apocalyptic world to life with practical effects, innovative stunts, and a gripping narrative centered on the iconic character.`,
    imageUrl: "/furiosa.jpg"
  }
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = sampleArticles[params.slug as ArticleKey];
  if (!article) {
    return {
      title: "Article Not Found | MovieBlog",
      description: "This article could not be found."
    };
  }
  return {
    title: `${article.title} | MovieBlog`,
    description: article.content.slice(0, 150),
    openGraph: {
      title: `${article.title} | MovieBlog`,
      description: article.content.slice(0, 150),
      images: [
        {
          url: article.imageUrl,
          width: 1200,
          height: 630,
          alt: article.title
        }
      ]
    }
  };
}

export default async function ArticlePage({ params }: Promise<{ slug: string }>) {
  const article = sampleArticles[await params.slug as ArticleKey];

  if (!article) {
    return <div className="text-red-500">Article not found.</div>;
  }

  return (
    <article className="bg-white p-6 rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <Image
        src={article.imageUrl}
        alt={article.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <div className="text-gray-800 leading-relaxed whitespace-pre-line">
        {article.content}
      </div>
    </article>
  );
}
