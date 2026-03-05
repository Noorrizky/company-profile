import React from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Index() {
    const services = [
        {
            title: "Web Development",
            description: "Pembuatan website company profile, e-commerce, hingga web app kompleks menggunakan stack modern (Laravel, React, Node.js).",
            icon: "💻"
        },
        {
            title: "UI/UX Design",
            description: "Rancangan antarmuka yang intuitif dan pengalaman pengguna yang memikat, fokus pada konversi dan kenyamanan audiens.",
            icon: "🎨"
        },
        {
            title: "Cloud & DevOps",
            description: "Setup server, migrasi cloud (AWS, GCP), dan implementasi CI/CD pipeline untuk deployment yang otomatis dan aman.",
            icon: "☁️"
        },
        {
            title: "IT Consulting",
            description: "Konsultasi strategis untuk merancang arsitektur sistem perangkat lunak yang efisien dan mudah di-scale ke depannya.",
            icon: "📈"
        },
        {
            title: "Mobile App Dev",
            description: "Pengembangan aplikasi mobile lintas platform (iOS & Android) yang responsif dan terintegrasi penuh dengan backend Anda.",
            icon: "📱"
        },
        {
            title: "System Integration",
            description: "Menghubungkan berbagai sistem dan API pihak ketiga untuk menciptakan alur kerja bisnis yang mulus dan terotomatisasi.",
            icon: "🔗"
        }
    ];

    return (
        <>
            <Head title="Layanan | Company Profile" />
            
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-extrabold text-gray-900">Layanan & Solusi Kami</h1>
                        <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
                            Kami menawarkan berbagai solusi teknologi end-to-end yang dirancang khusus untuk memenuhi kebutuhan unik bisnis Anda.
                        </p>
                    </div>

                    {/* Grid Layanan */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((svc, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="text-4xl mb-6 bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                                    {svc.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{svc.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {svc.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="mt-20 bg-blue-600 rounded-3xl p-10 text-center shadow-xl">
                        <h2 className="text-3xl font-bold text-white mb-4">Siap untuk Memulai Proyek Anda?</h2>
                        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                            Mari berdiskusi tentang bagaimana kami bisa membantu mewujudkan ide Anda menjadi produk digital yang luar biasa.
                        </p>
                        <Link 
                            href="/contact" 
                            className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
                        >
                            Konsultasi Gratis Sekarang
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

Index.layout = page => <MainLayout children={page} />;