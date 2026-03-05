import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Edit({ auth, portfolio }) {
    const { data, setData, post, processing, errors } = useForm({
        _method: 'PUT',
        title: portfolio.title || '',
        description: portfolio.description || '',
        client_name: portfolio.client_name || '',
        project_url: portfolio.project_url || '',
        image: null,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.portfolio.update', portfolio.id));
    };

    return (
        <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800">Edit Portofolio</h2>}>
            <Head title="Edit Portofolio" />
            <div className="py-12 max-w-4xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white p-6 shadow-sm sm:rounded-lg">
                    <form onSubmit={submit} className="space-y-4">
                        {/* Field yang sama persis dengan Create */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Judul Proyek</label>
                            <input type="text" value={data.title} onChange={e => setData('title', e.target.value)} className="mt-1 w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Klien</label>
                            <input type="text" value={data.client_name} onChange={e => setData('client_name', e.target.value)} className="mt-1 w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">URL Proyek</label>
                            <input type="url" value={data.project_url} onChange={e => setData('project_url', e.target.value)} className="mt-1 w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Deskripsi</label>
                            <textarea rows="4" value={data.description} onChange={e => setData('description', e.target.value)} className="mt-1 w-full border-gray-300 rounded-md shadow-sm"></textarea>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Ganti Gambar</label>
                            {portfolio.image_path && (
                                <img src={`/storage/${portfolio.image_path}`} alt="Current" className="h-20 mb-2 rounded" />
                            )}
                            <input type="file" onChange={e => setData('image', e.target.files[0])} className="mt-1 w-full" accept="image/*" />
                        </div>
                        <button type="submit" disabled={processing} className="px-4 py-2 bg-blue-600 text-white rounded-md mt-4">Update Portofolio</button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}