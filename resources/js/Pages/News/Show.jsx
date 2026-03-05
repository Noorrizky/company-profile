import React from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Show({ newsItem }) {
    // Fungsi untuk memformat tanggal
    const formattedDate = newsItem.published_at 
        ? new Date(newsItem.published_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
        : 'Tanggal tidak tersedia';

    return (
        <>
            <Head title={`${newsItem.title} | Company Profile`} />
            
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                
                {/* Tombol Kembali */}
                <div className="mb-8">
                    <Link href="/news" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                        Kembali ke Daftar Berita
                    </Link>
                </div>

                {/* Header Berita */}
                <header className="mb-10 text-center">
                    <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">
                        {formattedDate}
                    </p>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                        {newsItem.title}
                    </h1>
                </header>

                {/* Gambar Cover (Jika Ada) */}
                {newsItem.image_path && (
                    <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
                        <img 
                            src={`/storage/${newsItem.image_path}`} 
                            alt={`Cover untuk ${newsItem.title}`} 
                            className="w-full h-auto object-cover max-h-[500px]"
                        />
                    </div>
                )}

                {/* Isi Konten Berita */}
                <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {newsItem.content}
                </div>

            </article>
        </>
    );
}

Show.layout = page => <MainLayout children={page} />;