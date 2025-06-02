// components/Footer.tsx
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-purple-700 py-6 border-t border-purple-200 text-center text-sm text-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} BitLinks. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/shorten" className="hover:underline">Shorten</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="https://github.com/MohammedAffaq/url_shortener" target="_blank" className="hover:underline">
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
