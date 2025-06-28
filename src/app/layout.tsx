
import "./globals.css";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const metadata = {
  title: "MovieBlog - Latest Movie News",
  description: "Stay up to date with the latest movie news, trailers, and behind-the-scenes content.",
  openGraph: {
    title: "MovieBlog - Latest Movie News",
    description: "Stay up to date with the latest movie news, trailers, and behind-the-scenes content.",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "MovieBlog - Latest Movie News"
      }
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main className="max-w-5xl mx-auto px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

// https://www.facebook.com/share/1C15SgGpjb/

// https://www.facebook.com/share/1GMaAMQuXn/

// https://www.facebook.com/share/1EyaxUNGhb/

// https://www.facebook.com/share/16szR2f5mZ/

// https://www.facebook.com/share/1BxyzwNdbR/

// https://www.facebook.com/groups/moviesdiariesofficial/?ref=share&mibextid=NSMWBT

// https://www.facebook.com/share/1BuwW9sCFF/

// https://www.facebook.com/share/1Ah62p5HfZ/

// https://www.facebook.com/share/169jQGxQwW/

// https://www.facebook.com/FanMovieNew?mibextid=ZbWKwL

// https://www.facebook.com/share/16gB1Zs5Tu/

// https://www.facebook.com/share/1BYyLZaauV/

// https://www.facebook.com/share/16YuTS2sz5/

// https://www.facebook.com/share/1AsXHK9hBT/

// شورتات 

// https://www.facebook.com/share/1YiifGnfZ7/

// https://www.facebook.com/share/19odXceq47/

// https://www.facebook.com/share/1Y8KBiTfcv/

// بيانات 

// https://affmaven.com/ar/best-adult-traffic-sources/

