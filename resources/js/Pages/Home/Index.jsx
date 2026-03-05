import React from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Home({ news, portfolios }) {
    return (
        <>
            <Head title="Beranda | Company Profile" />

            {/* Hero Section */}
            <section className="bg-blue-600 text-white py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                        Solusi Teknologi untuk Masa Depan
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-blue-100">
                        Kami membantu bisnis Anda bertransformasi secara digital dengan layanan web development, cloud computing, dan integrasi sistem terbaik.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg">
                            Hubungi Kami
                        </Link>
                        <Link href="/portfolio" className="bg-transparent border border-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
                            Lihat Portofolio
                        </Link>
                    </div>
                </div>
            </section>

            {/* Ringkasan Layanan */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12 text-gray-800">Layanan Unggulan Kami</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 border border-gray-100 rounded-xl hover:shadow-xl transition duration-300">
                            <div className="w-16 h-16 bg-blue-50 text-blue-600 text-3xl rounded-xl flex items-center justify-center mb-6 mx-auto">💻</div>
                            <h3 className="text-xl font-bold mb-3">Web Development</h3>
                            <p className="text-gray-600 leading-relaxed">Pembuatan aplikasi web modern yang cepat, aman, dan responsif menggunakan teknologi terkini.</p>
                        </div>
                        <div className="p-6 border border-gray-100 rounded-xl hover:shadow-xl transition duration-300">
                            <div className="w-16 h-16 bg-blue-50 text-blue-600 text-3xl rounded-xl flex items-center justify-center mb-6 mx-auto">☁️</div>
                            <h3 className="text-xl font-bold mb-3">Cloud Solutions</h3>
                            <p className="text-gray-600 leading-relaxed">Migrasi dan manajemen server cloud untuk performa aplikasi yang stabil dan scalable.</p>
                        </div>
                        <div className="p-6 border border-gray-100 rounded-xl hover:shadow-xl transition duration-300">
                            <div className="w-16 h-16 bg-blue-50 text-blue-600 text-3xl rounded-xl flex items-center justify-center mb-6 mx-auto">📱</div>
                            <h3 className="text-xl font-bold mb-3">Mobile Apps</h3>
                            <p className="text-gray-600 leading-relaxed">Pengembangan aplikasi mobile yang terintegrasi penuh dengan ekosistem bisnis Anda.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cuplikan Portofolio */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800">Karya Terbaru Kami</h2>
                            <p className="mt-2 text-gray-600">Proyek-proyek yang baru saja kami selesaikan.</p>
                        </div>
                        <Link href="/portfolio" className="hidden sm:inline-flex text-blue-600 font-semibold hover:text-blue-800 transition">
                            Lihat Semua &rarr;
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {portfolios?.data?.length > 0 ? portfolios.data.map((item) => (
                            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                                <div className="h-48 bg-gray-200 relative">
                                    {item.image_path ? (
                                        <img src={`/storage/${item.image_path}`} alt={item.title} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-400">Tanpa Gambar</div>
                                    )}
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                                    <p className="text-sm text-blue-600 font-medium mb-3">{item.client_name || 'Internal'}</p>
                                    <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
                                </div>
                            </div>
                        )) : (
                            <p className="col-span-full text-center text-gray-500">Belum ada portofolio.</p>
                        )}
                    </div>
                </div>
            </section>

            {/* Cuplikan Berita */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800">Berita & Insight</h2>
                            <p className="mt-2 text-gray-600">Update terbaru dari tim kami.</p>
                        </div>
                        <Link href="/news" className="hidden sm:inline-flex text-blue-600 font-semibold hover:text-blue-800 transition">
                            Baca Blog Kami &rarr;
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {news?.data?.length > 0 ? news.data.map((item) => (
                            <div key={item.id} className="border border-gray-100 rounded-2xl p-6 hover:border-blue-100 hover:shadow-md transition-all">
                                <p className="text-xs text-blue-600 font-semibold mb-2">
                                    {new Date(item.published_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                                </p>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">
                                    <Link href={`/news/${item.slug}`} className="hover:text-blue-600 transition">
                                        {item.title}
                                    </Link>
                                </h3>
                                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                    {item.content}
                                </p>
                                <Link href={`/news/${item.slug}`} className="text-sm font-semibold text-blue-600 hover:text-blue-800">
                                    Baca selengkapnya &rarr;
                                </Link>
                            </div>
                        )) : (
                            <p className="col-span-full text-center text-gray-500">Belum ada berita terbaru.</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

Home.layout = page => <MainLayout children={page} />;