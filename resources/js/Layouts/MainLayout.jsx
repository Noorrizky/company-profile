import React from 'react';
import { Link } from '@inertiajs/react';

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans">
            {/* Navbar Sederhana */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex-shrink-0">
                            <Link href="/" className="text-2xl font-bold text-blue-600">
                                CorpBrand.
                            </Link>
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            <Link href="/" className="text-gray-600 hover:text-blue-600 transition">Beranda</Link>
                            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition">Tentang Kami</Link>
                            <Link href="/portfolio" className="text-gray-600 hover:text-blue-600 transition">Portfolio</Link>
                            <Link href="/services" className="text-gray-600 hover:text-blue-600 transition">Layanan</Link>
                            <Link href="/news" className="text-gray-600 hover:text-blue-600 transition">Berita</Link>
                            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition">Kontak</Link>
                        </nav>
                        {/* Tombol Mobile Menu bisa ditambahkan di sini nanti */}
                    </div>
                </div>
            </header>

            {/* Konten Halaman Dinamis */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p>&copy; {new Date().getFullYear()} CorpBrand. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}