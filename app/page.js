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
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The best URL shortener in the Market
          </p>
          <p className="px-27 text-center">
            A URL shortener is a web tool that takes a long, complex URL and turns it into a short, easy-to-share link. It’s commonly used to simplify links for social media, emails, or print, and often includes features like click tracking, analytics, and custom aliases to enhance link management and branding.
          </p>
        <div className='flex gap-3'>
          <Link href="/shorten"><button className='bg-purple-500 text-white rounded-lg shadow-lg p-3 py-1 font-bold'>Try now</button></Link>
          <Link target="_blank" href="https://github.com/MohammedAffaq/url_shortener"><button className='bg-purple-500 text-white rounded-lg shadow-lg p-3 py-1 font-bold'>Github</button></Link>
        </div>
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" alt="Vector" src={"/vector.jpg"} fill={true}></Image>
        </div>
      </section>
    </main>
  );
}
