import React from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Index({ news }) {
    return (
        <>
            <Head title="Berita | Company Profile" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900">Berita & Artikel Terbaru</h1>
                    <p className="mt-4 text-xl text-gray-500">Ikuti perkembangan dan informasi terbaru dari kami.</p>
                </div>

                {/* Grid Berita */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {news.data.length > 0 ? (
                        news.data.map((item) => (
                            <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
                                {/* Placeholder Gambar */}
                                <div className="h-48 bg-gray-200 flex items-center justify-center">
                                    <span className="text-gray-400 font-medium">Gambar Ilustrasi</span>
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <p className="text-sm text-blue-600 font-semibold mb-2">
                                        {new Date(item.published_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                                    </p>
                                    <h2 className="text-xl font-bold mb-3 text-gray-900 leading-tight">
                                        {item.title}
                                    </h2>
                                    <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                                        {item.content}
                                    </p>
                                    <Link
                                        href={`/news/${item.slug}`}
                                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                                    >
                                        Baca selengkapnya
                                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-500 text-lg">Belum ada berita yang dipublikasikan.</p>
                    )}
                </div>

                {/* Komponen Pagination */}
                <div className="mt-20 flex justify-center flex-wrap gap-2">
                    {news.links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.url || '#'}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${link.active
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                                } ${!link.url ? 'opacity-50 cursor-not-allowed' : ''}`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            preserveScroll
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

Index.layout = page => <MainLayout children={page} />;