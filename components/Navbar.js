// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white shadow-md">
      <div className="text-2xl font-bold">Quest</div>
      <ul className="flex space-x-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/courses">Courses</Link></li>
        <li><Link href="/pages">Pages</Link></li>
        <li><Link href="/blog">Blog</Link></li>
      </ul>
    </nav>
  );
}