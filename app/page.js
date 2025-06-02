import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
});

export default function Home() {

  return (
<main className="bg-purple-100">
  <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
    {/* Left Side */}
    <div className="flex flex-col gap-6 items-center justify-center px-4 py-8 sm:py-10 text-center">
      <p className={`text-2xl sm:text-3xl md:text-4xl font-bold ${poppins.className}`}>
        The best URL shortener in the Market
      </p>
      <p className="text-sm sm:text-base md:text-lg max-w-md">
        A URL shortener is a web tool that takes a long, complex URL and turns it into a short, easy-to-share link. It simplifies links for social media, emails, or print, and often includes click tracking, analytics, and branding options.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link href="/shorten">
          <button className="bg-purple-500 text-white rounded-lg shadow-md px-5 py-2 font-semibold hover:bg-purple-600 transition">
            Try now
          </button>
        </Link>
        <Link href="https://github.com/MohammedAffaq/url_shortener" target="_blank">
          <button className="bg-purple-500 text-white rounded-lg shadow-md px-5 py-2 font-semibold hover:bg-purple-600 transition">
            GitHub
          </button>
        </Link>
      </div>
    </div>

    {/* Right Side */}
    <div className="relative w-full h-64 sm:h-80 md:h-auto">
      <Image
        className="object-contain mix-blend-darken"
        alt="Vector"
        src="/vector.jpg"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
    </div>
  </section>
</main>

  );
}
