import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function NotFound() {
    return (
        <>
            <Head title="404 - Halaman Tidak Ditemukan" />
            
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-9xl font-extrabold text-blue-600 tracking-widest">404</h1>
                    <div className="bg-white px-2 text-sm rounded rotate-12 absolute shadow-sm border border-gray-100 text-gray-800 -mt-16 ml-20">
                        Oops!
                    </div>
                    
                    <h2 className="mt-8 text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl">
                        Halaman Tidak Ditemukan
                    </h2>
                    
                    <p className="mt-4 text-lg text-gray-500 max-w-lg mx-auto mb-8">
                        Maaf, halaman yang Anda cari mungkin telah dihapus, namanya diubah, atau sementara tidak tersedia.
                    </p>
                    
                    <Link
                        href="/"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                        Kembali ke Beranda
                    </Link>
                </div>
            </div>
        </>
    );
}