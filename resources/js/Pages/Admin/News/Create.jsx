import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        content: '',
        image: null,
        is_published: false,
    });

    const submit = (e) => {
        e.preventDefault();
        // Inertia otomatis mendeteksi adanya file dan mengubah request menjadi multipart/form-data
        post(route('admin.news.store')); 
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tambah Berita</h2>}
        >
            <Head title="Tambah Berita | Admin" />

            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            
                            <div className="mb-6">
                                <Link href={route('admin.news.index')} className="text-blue-600 hover:underline">
                                    &larr; Kembali ke Daftar Berita
                                </Link>
                            </div>

                            <form onSubmit={submit} className="space-y-6">
                                {/* Input Judul */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Judul Berita</label>
                                    <input
                                        type="text"
                                        value={data.title}
                                        onChange={e => setData('title', e.target.value)}
                                        className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                    />
                                    {errors.title && <div className="text-red-500 text-sm mt-1">{errors.title}</div>}
                                </div>

                                {/* Input Konten */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Konten / Isi Berita</label>
                                    <textarea
                                        rows="6"
                                        value={data.content}
                                        onChange={e => setData('content', e.target.value)}
                                        className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                    ></textarea>
                                    {errors.content && <div className="text-red-500 text-sm mt-1">{errors.content}</div>}
                                </div>

                                {/* Input Gambar */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Gambar Cover (Opsional)</label>
                                    <input
                                        type="file"
                                        onChange={e => setData('image', e.target.files[0])}
                                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                                        accept="image/*"
                                    />
                                    {errors.image && <div className="text-red-500 text-sm mt-1">{errors.image}</div>}
                                </div>

                                {/* Checkbox Publish */}
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={data.is_published}
                                        onChange={e => setData('is_published', e.target.checked)}
                                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
                                    />
                                    <label className="ml-2 block text-sm text-gray-900">
                                        Langsung Publish? (Tampil di halaman publik)
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50"
                                    >
                                        {processing ? 'Menyimpan...' : 'Simpan Berita'}
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}