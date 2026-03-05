import React from 'react';
import { Head, Link } from '@inertiajs/react'; // Pastikan Link di-import
import MainLayout from '@/Layouts/MainLayout';

export default function Index({ portfolios }) {
    return (
        <>
            <Head title="Portofolio | Company Profile" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900">Portofolio Kami</h1>
                    <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
                        Beberapa hasil karya terbaik kami dalam membantu klien mencapai tujuan bisnis mereka melalui teknologi.
                    </p>
                </div>

                {/* Grid Portofolio */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* PERUBAHAN: Gunakan portfolios.data.length dan portfolios.data.map */}
                    {portfolios.data.length > 0 ? (
                        portfolios.data.map((item) => (
                            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 group">
                                {/* Area Gambar Proyek */}
                                <div className="h-56 bg-gradient-to-br from-blue-100 to-indigo-50 flex flex-col items-center justify-center relative overflow-hidden">
                                    {/* Tampilkan gambar jika ada, jika tidak pakai placeholder icon */}
                                    {item.image_path ? (
                                        <img src={`/storage/${item.image_path}`} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    ) : (
                                        <div className="text-blue-500 opacity-50 group-hover:scale-110 transition-transform duration-500">
                                            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    )}
                                    <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-800 shadow-sm">
                                        {item.client_name || 'Internal Project'}
                                    </span>
                                </div>
                                
                                {/* Detail Proyek */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                        {item.description}
                                    </p>
                                    {item.project_url && (
                                        <a 
                                            href={item.project_url} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                                        >
                                            Kunjungi Proyek
                                            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-500 text-lg">Belum ada portofolio yang ditambahkan.</p>
                    )}
                </div>

                {/* --- TAMBAHKAN KOMPONEN PAGINATION DI SINI --- */}
                {portfolios.data.length > 0 && (
                    <div className="mt-16 flex justify-center flex-wrap gap-2">
                        {portfolios.links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.url || '#'}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                    link.active 
                                        ? 'bg-blue-600 text-white shadow-md' 
                                        : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                                } ${!link.url ? 'opacity-50 cursor-not-allowed' : ''}`}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                preserveScroll
                            />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

Index.layout = page => <MainLayout children={page} />;