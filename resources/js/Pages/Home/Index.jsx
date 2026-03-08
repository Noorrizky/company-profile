import React from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Home({ news, portfolios }) {
    return (
        <>
            <Head title="Beranda | Company Profile" />

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Epilogue:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');

                :root {
                    --bg: #F8F7F4;
                    --surface: #FFFFFF;
                    --surface-2: #F2F0EC;
                    --border: rgba(0,0,0,0.07);
                    --border-bright: rgba(0,0,0,0.14);
                    --text: #16140F;
                    --text-muted: #6B6860;
                    --text-soft: #4A4840;
                    --accent: #1D6EE8;
                    --accent-dim: rgba(29,110,232,0.08);
                    --accent-glow: rgba(29,110,232,0.2);
                    --grad-1: #1D6EE8;
                    --grad-2: #7C3AED;
                }

                .home-page * { box-sizing: border-box; }

                .home-page {
                    font-family: 'Epilogue', sans-serif;
                    background: var(--bg);
                    color: var(--text);
                    min-height: 100vh;
                }

                /* ── HERO ── */
                .hero {
                    position: relative;
                    min-height: 92vh;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                    padding: 8rem 0 6rem;
                    border-bottom: 1px solid var(--border);
                    color: #fff;
                }

                /* Background image layer */
                .hero-bg-img {
                    position: absolute;
                    inset: 0;
                    background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1800&q=80');
                    background-size: cover;
                    background-position: center;
                    z-index: 0;
                }

                /* Dark overlay so text is readable */
                .hero-bg-img::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        110deg,
                        rgba(10, 15, 40, 0.88) 0%,
                        rgba(10, 15, 40, 0.72) 55%,
                        rgba(10, 15, 40, 0.45) 100%
                    );
                }

                .hero-bg {
                    position: absolute;
                    inset: 0;
                    z-index: 1;
                }

                .hero-bg::before {
                    content: '';
                    position: absolute;
                    top: -15%;
                    right: -5%;
                    width: 60%;
                    height: 70%;
                    background: radial-gradient(ellipse, rgba(29,110,232,0.18) 0%, transparent 65%);
                    pointer-events: none;
                }

                .hero-bg::after {
                    content: '';
                    position: absolute;
                    bottom: -5%;
                    left: -5%;
                    width: 45%;
                    height: 50%;
                    background: radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 65%);
                    pointer-events: none;
                }

                .hero-grid {
                    position: absolute;
                    inset: 0;
                    background-image: radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px);
                    background-size: 36px 36px;
                    mask-image: radial-gradient(ellipse 75% 75% at 50% 50%, black 20%, transparent 100%);
                }

                .hero-inner {
                    position: relative;
                    z-index: 1;
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 2rem;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 6rem;
                    align-items: center;
                }

                .hero-tag {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: var(--accent-dim);
                    border: 1px solid rgba(29,110,232,0.18);
                    border-radius: 100px;
                    padding: 0.375rem 0.875rem;
                    font-size: 0.7rem;
                    font-family: 'Syne', sans-serif;
                    font-weight: 700;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    color: var(--accent);
                    margin-bottom: 2rem;
                    animation: fadeUp 0.6s ease both;
                }

                .hero-tag-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: var(--accent);
                    animation: pulse 2s ease infinite;
                }

                @keyframes pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.4; transform: scale(0.75); }
                }

                .hero-title {
                    font-family: 'Syne', sans-serif;
                    font-size: clamp(2.75rem, 5vw, 4.75rem);
                    font-weight: 800;
                    line-height: 1.05;
                    letter-spacing: -0.03em;
                    color: #fff;
                    margin-bottom: 1.75rem;
                    animation: fadeUp 0.6s 0.1s ease both;
                }

                .hero-title .highlight {
                    background: linear-gradient(130deg, #60B0FF, #C084FC);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .hero-desc {
                    font-size: 1.0625rem;
                    line-height: 1.78;
                    color: rgba(255,255,255,0.72);
                    font-weight: 300;
                    max-width: 430px;
                    margin-bottom: 2.75rem;
                    animation: fadeUp 0.6s 0.2s ease both;
                }

                .hero-cta {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                    animation: fadeUp 0.6s 0.3s ease both;
                }

                .btn-solid {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: var(--accent);
                    color: #fff;
                    text-decoration: none;
                    padding: 0.875rem 1.75rem;
                    border-radius: 8px;
                    font-family: 'Syne', sans-serif;
                    font-size: 0.875rem;
                    font-weight: 700;
                    letter-spacing: 0.02em;
                    transition: all 0.2s ease;
                    box-shadow: 0 4px 20px var(--accent-glow);
                }

                .btn-solid:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 32px var(--accent-glow);
                    filter: brightness(1.08);
                }

                .btn-solid svg { transition: transform 0.2s; }
                .btn-solid:hover svg { transform: translateX(3px); }

                .btn-outline {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: rgba(255,255,255,0.1);
                    color: #fff;
                    text-decoration: none;
                    padding: 0.875rem 1.75rem;
                    border-radius: 8px;
                    border: 1px solid rgba(255,255,255,0.3);
                    font-family: 'Syne', sans-serif;
                    font-size: 0.875rem;
                    font-weight: 600;
                    transition: all 0.2s ease;
                    backdrop-filter: blur(4px);
                }

                .btn-outline:hover {
                    background: rgba(255,255,255,0.2);
                    border-color: rgba(255,255,255,0.5);
                    transform: translateY(-2px);
                }

                .hero-right {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    animation: fadeUp 0.6s 0.35s ease both;
                }

                .stat-card {
                    background: rgba(255,255,255,0.1);
                    border: 1px solid rgba(255,255,255,0.15);
                    border-radius: 16px;
                    padding: 1.5rem 2rem;
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
                    backdrop-filter: blur(12px);
                }

                .stat-card:hover {
                    border-color: rgba(255,255,255,0.3);
                    transform: translateX(5px);
                    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
                }

                .stat-card:nth-child(2) { margin-left: 2rem; }

                .stat-icon {
                    width: 50px;
                    height: 50px;
                    border-radius: 12px;
                    background: var(--accent-dim);
                    border: 1px solid rgba(29,110,232,0.12);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.3rem;
                    flex-shrink: 0;
                }

                .stat-num {
                    font-family: 'Syne', sans-serif;
                    font-size: 1.75rem;
                    font-weight: 800;
                    color: #fff;
                    line-height: 1;
                    margin-bottom: 0.2rem;
                }

                .stat-label {
                    font-size: 0.8125rem;
                    color: rgba(255,255,255,0.6);
                }

                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(18px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                /* ── SHARED ── */
                .section-wrap {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 2rem;
                }

                .section-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    margin-bottom: 3.5rem;
                }

                .section-eyebrow {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.7rem;
                    font-family: 'Syne', sans-serif;
                    font-weight: 700;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: var(--accent);
                    margin-bottom: 0.6rem;
                }

                .section-eyebrow::before {
                    content: '';
                    display: block;
                    width: 1.25rem;
                    height: 1.5px;
                    background: var(--accent);
                }

                .section-title {
                    font-family: 'Syne', sans-serif;
                    font-size: clamp(1.75rem, 3vw, 2.375rem);
                    font-weight: 700;
                    color: var(--text);
                    letter-spacing: -0.025em;
                    line-height: 1.15;
                }

                .section-subtitle {
                    margin-top: 0.5rem;
                    font-size: 0.9375rem;
                    color: var(--text-muted);
                    font-weight: 300;
                }

                .link-all {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.4rem;
                    font-family: 'Syne', sans-serif;
                    font-size: 0.8125rem;
                    font-weight: 700;
                    color: var(--accent);
                    text-decoration: none;
                    white-space: nowrap;
                    transition: gap 0.2s;
                    letter-spacing: 0.04em;
                }
                .link-all:hover { gap: 0.7rem; }

                /* ── SERVICES ── */
                .services-section {
                    padding: 7rem 0;
                    background: var(--bg);
                    border-bottom: 1px solid var(--border);
                }

                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.25rem;
                }

                .service-card {
                    background: var(--surface);
                    border: 1px solid var(--border);
                    border-radius: 16px;
                    padding: 2.5rem 2.25rem;
                    position: relative;
                    overflow: hidden;
                    transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
                }

                .service-card::after {
                    content: '';
                    position: absolute;
                    top: 0; left: 0;
                    width: 100%; height: 3px;
                    background: linear-gradient(90deg, var(--grad-1), var(--grad-2));
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.35s ease;
                }

                .service-card:hover {
                    border-color: rgba(29,110,232,0.2);
                    transform: translateY(-4px);
                    box-shadow: 0 12px 40px rgba(0,0,0,0.07);
                }

                .service-card:hover::after { transform: scaleX(1); }

                .service-num {
                    font-family: 'Syne', sans-serif;
                    font-size: 0.7rem;
                    font-weight: 700;
                    letter-spacing: 0.2em;
                    color: var(--text-muted);
                    margin-bottom: 1.5rem;
                    opacity: 0.5;
                }

                .service-icon {
                    width: 52px;
                    height: 52px;
                    border-radius: 14px;
                    background: var(--accent-dim);
                    border: 1px solid rgba(29,110,232,0.12);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.4rem;
                    margin-bottom: 1.5rem;
                }

                .service-title {
                    font-family: 'Syne', sans-serif;
                    font-size: 1.125rem;
                    font-weight: 700;
                    color: var(--text);
                    margin-bottom: 0.75rem;
                    letter-spacing: -0.015em;
                }

                .service-desc {
                    font-size: 0.9rem;
                    line-height: 1.72;
                    color: var(--text-muted);
                    font-weight: 300;
                }

                /* ── PORTFOLIO ── */
                .portfolio-section {
                    padding: 7rem 0;
                    background: var(--surface);
                    border-bottom: 1px solid var(--border);
                }

                .portfolio-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.25rem;
                }

                .portfolio-card {
                    background: var(--bg);
                    border: 1px solid var(--border);
                    border-radius: 16px;
                    overflow: hidden;
                    transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
                }

                .portfolio-card:hover {
                    border-color: rgba(29,110,232,0.2);
                    transform: translateY(-4px);
                    box-shadow: 0 16px 50px rgba(0,0,0,0.09);
                }

                .portfolio-img {
                    height: 200px;
                    background: var(--surface-2);
                    overflow: hidden;
                }

                .portfolio-img img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.4s ease;
                }

                .portfolio-card:hover .portfolio-img img { transform: scale(1.05); }

                .portfolio-img-placeholder {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--text-muted);
                    font-size: 0.8125rem;
                    letter-spacing: 0.08em;
                }

                .portfolio-body { padding: 1.5rem 1.75rem; }

                .portfolio-client {
                    display: inline-block;
                    background: var(--accent-dim);
                    color: var(--accent);
                    font-size: 0.7rem;
                    font-family: 'Syne', sans-serif;
                    font-weight: 700;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    padding: 0.3rem 0.75rem;
                    border-radius: 100px;
                    margin-bottom: 0.875rem;
                }

                .portfolio-title {
                    font-family: 'Syne', sans-serif;
                    font-size: 1rem;
                    font-weight: 700;
                    color: var(--text);
                    margin-bottom: 0.5rem;
                    letter-spacing: -0.01em;
                }

                .portfolio-desc {
                    font-size: 0.875rem;
                    line-height: 1.65;
                    color: var(--text-muted);
                    font-weight: 300;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .portfolio-empty, .news-empty {
                    grid-column: 1 / -1;
                    text-align: center;
                    padding: 4rem;
                    color: var(--text-muted);
                    font-size: 0.9375rem;
                }

                /* ── NEWS ── */
                .news-section {
                    padding: 7rem 0;
                    background: var(--bg);
                    border-bottom: 1px solid var(--border);
                }

                .news-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.25rem;
                }

                .news-card {
                    background: var(--surface);
                    border: 1px solid var(--border);
                    border-radius: 16px;
                    padding: 2rem;
                    display: flex;
                    flex-direction: column;
                    text-decoration: none;
                    transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
                }

                .news-card:hover {
                    border-color: rgba(29,110,232,0.2);
                    transform: translateY(-3px);
                    box-shadow: 0 12px 40px rgba(0,0,0,0.07);
                }

                .news-date {
                    font-family: 'Syne', sans-serif;
                    font-size: 0.7rem;
                    font-weight: 700;
                    letter-spacing: 0.12em;
                    color: var(--accent);
                    text-transform: uppercase;
                    margin-bottom: 1rem;
                }

                .news-title {
                    font-family: 'Syne', sans-serif;
                    font-size: 1.05rem;
                    font-weight: 700;
                    color: var(--text);
                    line-height: 1.4;
                    letter-spacing: -0.015em;
                    margin-bottom: 0.875rem;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    transition: color 0.2s;
                }

                .news-card:hover .news-title { color: var(--accent); }

                .news-excerpt {
                    font-size: 0.875rem;
                    line-height: 1.68;
                    color: var(--text-muted);
                    font-weight: 300;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    flex: 1;
                    margin-bottom: 1.5rem;
                }

                .news-read {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.4rem;
                    font-family: 'Syne', sans-serif;
                    font-size: 0.775rem;
                    font-weight: 700;
                    color: var(--accent);
                    letter-spacing: 0.06em;
                    transition: gap 0.2s;
                }

                .news-card:hover .news-read { gap: 0.7rem; }

                /* ── CTA ── */
                .cta-section {
                    padding: 8rem 0;
                    background: var(--surface);
                    position: relative;
                    overflow: hidden;
                }

                .cta-section::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 600px;
                    height: 400px;
                    background: radial-gradient(ellipse, rgba(29,110,232,0.06) 0%, transparent 70%);
                    pointer-events: none;
                }

                .cta-inner {
                    position: relative;
                    z-index: 1;
                    max-width: 680px;
                    margin: 0 auto;
                    text-align: center;
                }

                .cta-title {
                    font-family: 'Syne', sans-serif;
                    font-size: clamp(2rem, 4vw, 3rem);
                    font-weight: 800;
                    letter-spacing: -0.03em;
                    color: var(--text);
                    margin-bottom: 1.25rem;
                    line-height: 1.1;
                }

                .cta-desc {
                    font-size: 1rem;
                    line-height: 1.75;
                    color: var(--text-muted);
                    font-weight: 300;
                    margin-bottom: 2.5rem;
                }

                .cta-btns {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    flex-wrap: wrap;
                }

                /* ── RESPONSIVE ── */
                @media (max-width: 1024px) {
                    .hero-inner { grid-template-columns: 1fr; gap: 3rem; }
                    .hero-right { flex-direction: row; flex-wrap: wrap; }
                    .stat-card:nth-child(2) { margin-left: 0; }
                    .stat-card { flex: 1; min-width: 180px; }
                    .services-grid, .portfolio-grid, .news-grid { grid-template-columns: 1fr 1fr; }
                }

                @media (max-width: 640px) {
                    .hero { padding: 5rem 0 4rem; min-height: auto; }
                    .hero-inner, .section-wrap { padding: 0 1.25rem; }
                    .section-header { flex-direction: column; align-items: flex-start; gap: 1rem; }
                    .services-grid, .portfolio-grid, .news-grid { grid-template-columns: 1fr; }
                    .hero-right { display: none; }
                    .services-section, .portfolio-section, .news-section, .cta-section { padding: 4rem 0; }
                }
            `}</style>

            <div className="home-page">

                {/* ── HERO ── */}
                <section className="hero">
                    <div className="hero-bg-img" />
                    <div className="hero-bg">
                        <div className="hero-grid" />
                    </div>
                    <div className="hero-inner">
                        <div className="hero-left">
                            <div className="hero-tag">
                                <span className="hero-tag-dot" />
                                Technology Partner
                            </div>
                            <h1 className="hero-title">
                                Solusi Digital untuk{' '}
                                <span className="highlight">Masa Depan</span>{' '}
                                Bisnis Anda
                            </h1>
                            <p className="hero-desc">
                                Kami membantu bisnis bertransformasi secara digital dengan
                                layanan web development, cloud computing, dan integrasi
                                sistem yang handal.
                            </p>
                            <div className="hero-cta">
                                <Link href="/contact" className="btn-solid">
                                    Hubungi Kami
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"/>
                                    </svg>
                                </Link>
                                <Link href="/portfolio" className="btn-outline">
                                    Lihat Portofolio
                                </Link>
                            </div>
                        </div>
                        <div className="hero-right">
                            <div className="stat-card">
                                <div className="stat-icon">🚀</div>
                                <div>
                                    <div className="stat-num">150+</div>
                                    <div className="stat-label">Proyek Selesai</div>
                                </div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-icon">🤝</div>
                                <div>
                                    <div className="stat-num">80+</div>
                                    <div className="stat-label">Klien Puas</div>
                                </div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-icon">⭐</div>
                                <div>
                                    <div className="stat-num">8 Thn</div>
                                    <div className="stat-label">Pengalaman</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── LAYANAN ── */}
                <section className="services-section">
                    <div className="section-wrap">
                        <div className="section-header">
                            <div>
                                <p className="section-eyebrow">Apa yang Kami Lakukan</p>
                                <h2 className="section-title">Layanan Unggulan Kami</h2>
                                <p className="section-subtitle">Teknologi terbaik untuk mendorong pertumbuhan bisnis Anda.</p>
                            </div>
                        </div>
                        <div className="services-grid">
                            <div className="service-card">
                                <div className="service-num">01</div>
                                <div className="service-icon">💻</div>
                                <h3 className="service-title">Web Development</h3>
                                <p className="service-desc">Pembuatan aplikasi web modern yang cepat, aman, dan responsif menggunakan teknologi terkini.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-num">02</div>
                                <div className="service-icon">☁️</div>
                                <h3 className="service-title">Cloud Solutions</h3>
                                <p className="service-desc">Migrasi dan manajemen server cloud untuk performa aplikasi yang stabil dan scalable.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-num">03</div>
                                <div className="service-icon">📱</div>
                                <h3 className="service-title">Mobile Apps</h3>
                                <p className="service-desc">Pengembangan aplikasi mobile yang terintegrasi penuh dengan ekosistem bisnis Anda.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── PORTOFOLIO ── */}
                <section className="portfolio-section">
                    <div className="section-wrap">
                        <div className="section-header">
                            <div>
                                <p className="section-eyebrow">Hasil Karya</p>
                                <h2 className="section-title">Karya Terbaru Kami</h2>
                                <p className="section-subtitle">Proyek-proyek yang baru saja kami selesaikan.</p>
                            </div>
                            <Link href="/portfolio" className="link-all">
                                Lihat Semua
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"/>
                                </svg>
                            </Link>
                        </div>
                        <div className="portfolio-grid">
                            {portfolios?.data?.length > 0 ? portfolios.data.map((item) => (
                                <div key={item.id} className="portfolio-card">
                                    <div className="portfolio-img">
                                        {item.image_path ? (
                                            <img src={`/storage/${item.image_path}`} alt={item.title} />
                                        ) : (
                                            <div className="portfolio-img-placeholder">No Preview</div>
                                        )}
                                    </div>
                                    <div className="portfolio-body">
                                        <span className="portfolio-client">{item.client_name || 'Internal'}</span>
                                        <h3 className="portfolio-title">{item.title}</h3>
                                        <p className="portfolio-desc">{item.description}</p>
                                    </div>
                                </div>
                            )) : (
                                <p className="portfolio-empty">Belum ada portofolio.</p>
                            )}
                        </div>
                    </div>
                </section>

                {/* ── BERITA ── */}
                <section className="news-section">
                    <div className="section-wrap">
                        <div className="section-header">
                            <div>
                                <p className="section-eyebrow">Terbaru</p>
                                <h2 className="section-title">Berita & Insight</h2>
                                <p className="section-subtitle">Update terbaru dari tim kami.</p>
                            </div>
                            <Link href="/news" className="link-all">
                                Baca Blog Kami
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"/>
                                </svg>
                            </Link>
                        </div>
                        <div className="news-grid">
                            {news?.data?.length > 0 ? news.data.map((item) => (
                                <Link href={`/news/${item.slug}`} key={item.id} className="news-card">
                                    <p className="news-date">
                                        {new Date(item.published_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                                    </p>
                                    <h3 className="news-title">{item.title}</h3>
                                    <p className="news-excerpt">{item.content}</p>
                                    <span className="news-read">
                                        Baca selengkapnya
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"/>
                                        </svg>
                                    </span>
                                </Link>
                            )) : (
                                <p className="news-empty">Belum ada berita terbaru.</p>
                            )}
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="cta-section">
                    <div className="section-wrap">
                        <div className="cta-inner">
                            <h2 className="cta-title">Siap Memulai Proyek Anda?</h2>
                            <p className="cta-desc">
                                Diskusikan kebutuhan bisnis Anda bersama tim ahli kami. Kami siap membantu mewujudkan transformasi digital yang tepat sasaran.
                            </p>
                            <div className="cta-btns">
                                <Link href="/contact" className="btn-solid">
                                    Mulai Sekarang
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"/>
                                    </svg>
                                </Link>
                                <Link href="/portfolio" className="btn-solid">
                                    Lihat Portofolio
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}

Home.layout = page => <MainLayout children={page} />;