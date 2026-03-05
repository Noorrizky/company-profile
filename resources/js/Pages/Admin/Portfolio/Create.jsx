import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        title: '', description: '', client_name: '', project_url: '', image: null,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.portfolio.store'));
    };

    return (
        <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800">Tambah Portofolio</h2>}>
            <Head title="Tambah Portofolio" />
            <div className="py-12 max-w-4xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white p-6 shadow-sm sm:rounded-lg">
                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Judul Proyek</label>
                            <input type="text" value={data.title} onChange={e => setData('title', e.target.value)} className="mt-1 w-full border-gray-300 rounded-md shadow-sm" />
                            {errors.title && <div className="text-red-500 text-sm mt-1">{errors.title}</div>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Klien</label>
                            <input type="text" value={data.client_name} onChange={e => setData('client_name', e.target.value)} className="mt-1 w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">URL Proyek</label>
                            <input type="url" value={data.project_url} onChange={e => setData('project_url', e.target.value)} className="mt-1 w-full border-gray-300 rounded-md shadow-sm" placeholder="https://..." />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Deskripsi</label>
                            <textarea rows="4" value={data.description} onChange={e => setData('description', e.target.value)} className="mt-1 w-full border-gray-300 rounded-md shadow-sm"></textarea>
                            {errors.description && <div className="text-red-500 text-sm mt-1">{errors.description}</div>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Gambar Proyek</label>
                            <input type="file" onChange={e => setData('image', e.target.files[0])} className="mt-1 w-full" accept="image/*" />
                        </div>
                        <button type="submit" disabled={processing} className="px-4 py-2 bg-gray-800 text-white rounded-md mt-4">Simpan Portofolio</button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}