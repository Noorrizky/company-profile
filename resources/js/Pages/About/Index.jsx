import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Index() {
    return (
        <>
            <Head title="Tentang Kami | Company Profile" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900">Tentang CorpBrand</h1>
                    <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
                        Membangun inovasi digital sejak 2015. Kami berdedikasi untuk memberikan solusi teknologi terbaik bagi pertumbuhan bisnis Anda.
                    </p>
                </div>

                {/* Sejarah Perusahaan */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Sejarah Kami</h2>
                    <div className="prose prose-lg text-gray-600 max-w-none">
                        <p>
                            Berawal dari sebuah tim kecil yang penuh semangat, CorpBrand didirikan dengan satu tujuan: menjembatani kesenjangan antara bisnis konvensional dan teknologi modern. Selama bertahun-tahun, kami telah berevolusi dari agensi web development lokal menjadi penyedia solusi IT komprehensif yang melayani klien dari berbagai industri.
                        </p>
                        <p className="mt-4">
                            Perjalanan kami dibangun di atas kepercayaan, transparansi, dan komitmen tak tergoyahkan terhadap kualitas *Clean Code* dan arsitektur perangkat lunak yang *scalable*.
                        </p>
                    </div>
                </div>

                {/* Visi & Misi Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Visi */}
                    <div className="bg-blue-600 rounded-2xl shadow-lg p-8 md:p-12 text-white">
                        <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Visi</h3>
                        <p className="text-blue-100 text-lg leading-relaxed">
                            Menjadi perusahaan teknologi terdepan yang mendorong transformasi digital berkelanjutan untuk bisnis di seluruh Indonesia, menciptakan ekosistem digital yang efisien dan aman.
                        </p>
                    </div>

                    {/* Misi */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
                        <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi</h3>
                        <ul className="space-y-4 text-gray-600 text-lg">
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">✓</span> Menyediakan layanan web development berkualitas tinggi.
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">✓</span> Menerapkan standar keamanan dan performa terbaik di setiap proyek.
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">✓</span> Memberikan dukungan teknis yang responsif dan solutif.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

Index.layout = page => <MainLayout children={page} />;