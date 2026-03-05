import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';

export default function Dashboard({ auth, stats, messages }) {
    const [selectedMessage, setSelectedMessage] = useState(null);

    const openMessage = (msg) => {
        setSelectedMessage(msg);
        if (!msg.is_read) {
            router.patch(`/admin/dashboard/messages/${msg.id}/read`, {}, {
                preserveScroll: true,
                preserveState: true,
            });
        }
    };

    const closeModal = () => {
        setSelectedMessage(null);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard Overview</h2>}
        >
            <Head title="Dashboard | Admin" />

            <div className="py-12 relative">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                    {/* --- STATISTIK CARDS --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 px-4 sm:px-0">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center">
                            <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Pesan Belum Dibaca</p>
                                <p className="text-2xl font-bold text-gray-900">{stats.unread_messages}</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center">
                            <div className="p-3 rounded-full bg-indigo-100 text-indigo-600 mr-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Total Portofolio</p>
                                <p className="text-2xl font-bold text-gray-900">{stats.total_portfolios}</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center">
                            <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14"></path></svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Berita Ter-Publish</p>
                                <p className="text-2xl font-bold text-gray-900">{stats.published_news} <span className="text-sm text-gray-400 font-normal">/ {stats.total_news}</span></p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center">
                            <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Total Inbox</p>
                                <p className="text-2xl font-bold text-gray-900">{stats.total_messages}</p>
                            </div>
                        </div>
                    </div>

                    {/* --- AREA DAFTAR PESAN --- */}
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-xl border border-gray-100 mt-8 mx-4 sm:mx-0">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                            <h3 className="text-lg font-bold text-gray-900">Histori Kotak Masuk</h3>
                            <span className="text-sm text-gray-500">Total: {stats.total_messages} Pesan</span>
                        </div>

                        {/* Tampilan Layar Besar (Desktop Table) */}
                        <div className="hidden md:block overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-white">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Pengirim</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subjek</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tanggal</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {messages.data.length > 0 ? messages.data.map((msg) => (
                                        <tr key={msg.id} className={msg.is_read ? 'bg-white' : 'bg-blue-50/40 hover:bg-blue-50 transition-colors'}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {msg.is_read ? (
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">Dibaca</span>
                                                ) : (
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 animate-pulse">Baru</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {msg.name} <br /><span className="text-xs text-gray-500 font-normal">{msg.email}</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium truncate max-w-[200px]">
                                                {msg.subject}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {new Date(msg.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <button
                                                    onClick={() => openMessage(msg)}
                                                    className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-md text-xs font-semibold transition-colors shadow-sm"
                                                >
                                                    Lihat Pesan
                                                </button>
                                            </td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan="5" className="px-6 py-8 text-center text-gray-500">Belum ada pesan masuk.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Tampilan Layar Kecil (Mobile Cards) */}
                        <div className="block md:hidden divide-y divide-gray-100">
                            {messages.data.length > 0 ? messages.data.map((msg) => (
                                <div key={msg.id} className={`p-4 ${msg.is_read ? 'bg-white' : 'bg-blue-50/40'}`}>
                                    <div className="flex justify-between items-center mb-3">
                                        {msg.is_read ? (
                                            <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-full bg-gray-100 text-gray-800">Dibaca</span>
                                        ) : (
                                            <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-full bg-blue-100 text-blue-800 animate-pulse">Baru</span>
                                        )}
                                        <span className="text-xs text-gray-500 font-medium">
                                            {new Date(msg.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </div>
                                    <div className="mb-2">
                                        <p className="text-sm font-bold text-gray-900">{msg.name}</p>
                                        <a href={`mailto:${msg.email}`} className="text-xs text-blue-600 hover:underline break-all">{msg.email}</a>
                                    </div>
                                    <div className="mb-4">
                                        {/* Hapus line-clamp-2 dan pastikan pakai break-words agar subjek tampil FULL tanpa terpotong */}
                                        <p className="text-sm text-gray-900 font-bold break-words whitespace-normal mt-1 leading-relaxed">{msg.subject}</p>

                                        {/* Preview pesan tetap kita batasi 2 baris agar kartu tidak terlalu memanjang ke bawah */}
                                        <p className="text-xs text-gray-500 line-clamp-2 mt-1 leading-relaxed break-words">{msg.message}</p>
                                    </div>
                                    <button
                                        onClick={() => openMessage(msg)}
                                        className="w-full text-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2.5 rounded-lg text-sm font-bold transition-colors shadow-sm"
                                    >
                                        Lihat Pesan
                                    </button>
                                </div>
                            )) : (
                                <div className="p-8 text-center text-gray-500 text-sm">Belum ada pesan masuk.</div>
                            )}
                        </div>

                        {/* Pagination */}
                        {messages.data.length > 0 && (
                            <div className="p-4 border-t border-gray-100 flex justify-end gap-2 bg-gray-50 flex-wrap">
                                {messages.links.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.url || '#'}
                                        className={`px-3 py-1 border rounded text-sm transition-colors ${link.active ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 hover:bg-gray-100'} ${!link.url && 'opacity-50 cursor-not-allowed'}`}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                        preserveScroll
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* --- MODAL DETAIL PESAN (POP-UP) --- */}
            {selectedMessage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/75 backdrop-blur-sm transition-opacity">
                    {/* PERBAIKAN 1: Tambahkan flex, flex-col, dan max-h-[90vh] agar tinggi modal tidak melebihi layar */}
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
                        
                        {/* Modal Header (Tetap di atas / flex-shrink-0) */}
                        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50 flex-shrink-0 rounded-t-2xl">
                            <h3 className="text-lg font-bold text-gray-900">Detail Pesan Kontak</h3>
                            <button onClick={closeModal} className="text-gray-400 hover:text-red-500 transition-colors p-1">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>

                        {/* Modal Body (Bisa di-scroll / overflow-y-auto / flex-grow) */}
                        <div className="p-6 space-y-4 overflow-y-auto flex-grow">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                <div>
                                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Pengirim</p>
                                    <p className="font-medium text-gray-900">{selectedMessage.name}</p>
                                    <a href={`mailto:${selectedMessage.email}`} className="text-sm text-blue-600 hover:underline break-all">{selectedMessage.email}</a>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Waktu Diterima</p>
                                    <p className="font-medium text-gray-900 text-sm sm:text-base">
                                        {new Date(selectedMessage.created_at).toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2">Subjek Pesan</p>
                                <p className="font-bold text-lg text-gray-900 border-b pb-2 break-words whitespace-normal">{selectedMessage.subject}</p>
                            </div>

                            <div>
                                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2">Isi Pesan</p>
                                {/* PERBAIKAN 2: max-h-64 dihilangkan agar scroll-nya menyatu dengan scroll utama Modal Body */}
                                <div className="bg-blue-50/50 p-4 rounded-xl text-gray-700 whitespace-pre-wrap break-words leading-relaxed border border-blue-100 text-sm sm:text-base">
                                    {selectedMessage.message}
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer (Tetap di bawah / flex-shrink-0) */}
                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex flex-col-reverse sm:flex-row justify-end gap-3 flex-shrink-0 rounded-b-2xl">
                            <button onClick={closeModal} className="w-full sm:w-auto px-4 py-2.5 bg-white border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-colors text-center">
                                Tutup
                            </button>
                            <a href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`} className="w-full sm:w-auto px-4 py-2.5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-sm text-center">
                                Balas via Email
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}