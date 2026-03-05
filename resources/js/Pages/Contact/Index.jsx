import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Index() {
    // State lokal untuk pesan sukses
    const [isSuccess, setIsSuccess] = useState(false);

    // Menggunakan useForm dari Inertia
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const submit = (e) => {
        e.preventDefault(); // Mencegah reload halaman bawaan browser
        
        post('/contact', {
            preserveScroll: true,
            onSuccess: () => {
                reset(); // Kosongkan form jika berhasil
                setIsSuccess(true); // Tampilkan pesan sukses
                
                // Hilangkan pesan sukses setelah 5 detik
                setTimeout(() => setIsSuccess(false), 5000);
            },
        });
    };

    return (
        <>
            <Head title="Hubungi Kami | Company Profile" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-extrabold text-gray-900">Hubungi Kami</h1>
                        <p className="mt-4 text-xl text-gray-500">Punya pertanyaan atau ingin berdiskusi soal proyek? Jangan ragu untuk mengirim pesan.</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12">
                        {/* Alert Sukses */}
                        {isSuccess && (
                            <div className="mb-8 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 rounded-md transition-all duration-300">
                                <p className="font-semibold">Terima kasih!</p>
                                <p>Pesan Anda berhasil dikirim. Tim kami akan segera menghubungi Anda.</p>
                            </div>
                        )}

                        <form onSubmit={submit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Input Nama */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className={`w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                                            errors.name ? 'border-red-300' : 'border-gray-300'
                                        }`}
                                        placeholder="John Doe"
                                    />
                                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                                </div>

                                {/* Input Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Alamat Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        className={`w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                                            errors.email ? 'border-red-300' : 'border-gray-300'
                                        }`}
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                </div>
                            </div>

                            {/* Input Subjek */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subjek</label>
                                <input
                                    type="text"
                                    id="subject"
                                    value={data.subject}
                                    onChange={(e) => setData('subject', e.target.value)}
                                    className={`w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                                        errors.subject ? 'border-red-300' : 'border-gray-300'
                                    }`}
                                    placeholder="Tanya Layanan Web Development"
                                />
                                {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
                            </div>

                            {/* Input Pesan */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                    className={`w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                                        errors.message ? 'border-red-300' : 'border-gray-300'
                                    }`}
                                    placeholder="Tuliskan detail pertanyaan atau kebutuhan Anda di sini..."
                                ></textarea>
                                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                            </div>

                            {/* Tombol Submit */}
                            <div>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {processing ? 'Mengirim...' : 'Kirim Pesan'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

Index.layout = page => <MainLayout children={page} />;