import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';

const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/about', label: 'Tentang Kami' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/services', label: 'Layanan' },
    { href: '/news', label: 'Berita' },
    { href: '/contact', label: 'Kontak' },
];

export default function MainLayout({ children }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Navbar shadow on scroll
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close menu on resize to desktop
    useEffect(() => {
        const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#F8F7F4', fontFamily: "'Epilogue', sans-serif" }}>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Epilogue:wght@300;400;500&display=swap');

                /* ── NAVBAR ── */
                .navbar {
                    position: sticky;
                    top: 0;
                    z-index: 100;
                    background: rgba(255,255,255,0.92);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border-bottom: 1px solid rgba(0,0,0,0.07);
                    transition: box-shadow 0.25s ease;
                }

                .navbar.scrolled {
                    box-shadow: 0 4px 24px rgba(0,0,0,0.07);
                }

                .navbar-inner {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 2rem;
                    height: 68px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                /* Brand */
                .brand {
                    font-family: 'Syne', sans-serif;
                    font-size: 1.375rem;
                    font-weight: 800;
                    color: #1D6EE8;
                    text-decoration: none;
                    letter-spacing: -0.02em;
                    flex-shrink: 0;
                }

                .brand span { color: #16140F; }

                /* Desktop nav */
                .nav-desktop {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                }

                .nav-link {
                    font-family: 'Epilogue', sans-serif;
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: #6B6860;
                    text-decoration: none;
                    padding: 0.5rem 0.875rem;
                    border-radius: 8px;
                    transition: color 0.2s, background 0.2s;
                    white-space: nowrap;
                }

                .nav-link:hover {
                    color: #1D6EE8;
                    background: rgba(29,110,232,0.06);
                }

                .nav-link.active {
                    color: #1D6EE8;
                    font-weight: 600;
                }

                .nav-cta {
                    margin-left: 0.75rem;
                    display: inline-flex;
                    align-items: center;
                    background: #1D6EE8;
                    color: #fff !important;
                    text-decoration: none;
                    padding: 0.5rem 1.25rem;
                    border-radius: 8px;
                    font-family: 'Syne', sans-serif;
                    font-size: 0.8125rem;
                    font-weight: 700;
                    letter-spacing: 0.02em;
                    transition: filter 0.2s, transform 0.2s, box-shadow 0.2s;
                    box-shadow: 0 2px 12px rgba(29,110,232,0.25);
                }

                .nav-cta:hover {
                    filter: brightness(1.1);
                    transform: translateY(-1px);
                    box-shadow: 0 6px 20px rgba(29,110,232,0.3);
                }

                /* Hamburger button */
                .hamburger {
                    display: none;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 5px;
                    width: 40px;
                    height: 40px;
                    border: none;
                    background: transparent;
                    cursor: pointer;
                    padding: 4px;
                    border-radius: 8px;
                    transition: background 0.2s;
                    flex-shrink: 0;
                }

                .hamburger:hover { background: rgba(0,0,0,0.05); }

                .ham-line {
                    display: block;
                    width: 22px;
                    height: 2px;
                    background: #16140F;
                    border-radius: 2px;
                    transition: transform 0.3s ease, opacity 0.3s ease, width 0.3s ease;
                    transform-origin: center;
                }

                /* Animate to X */
                .hamburger.open .ham-line:nth-child(1) { transform: translateY(7px) rotate(45deg); }
                .hamburger.open .ham-line:nth-child(2) { opacity: 0; transform: scaleX(0); }
                .hamburger.open .ham-line:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

                /* Mobile drawer */
                .mobile-overlay {
                    display: none;
                    position: fixed;
                    inset: 0;
                    background: rgba(0,0,0,0.35);
                    backdrop-filter: blur(2px);
                    z-index: 98;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .mobile-overlay.visible {
                    opacity: 1;
                }

                .mobile-menu {
                    position: fixed;
                    top: 0;
                    right: 0;
                    height: 100dvh;
                    width: min(320px, 85vw);
                    background: #fff;
                    z-index: 99;
                    display: flex;
                    flex-direction: column;
                    transform: translateX(100%);
                    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: -8px 0 40px rgba(0,0,0,0.12);
                }

                .mobile-menu.open {
                    transform: translateX(0);
                }

                .mobile-menu-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 1.25rem 1.5rem;
                    border-bottom: 1px solid rgba(0,0,0,0.07);
                }

                .mobile-close {
                    width: 36px;
                    height: 36px;
                    border: none;
                    background: rgba(0,0,0,0.05);
                    border-radius: 8px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background 0.2s;
                }

                .mobile-close:hover { background: rgba(0,0,0,0.1); }

                .mobile-nav {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    padding: 1.5rem 1.25rem;
                    gap: 0.25rem;
                    overflow-y: auto;
                }

                .mobile-nav-link {
                    font-family: 'Epilogue', sans-serif;
                    font-size: 1rem;
                    font-weight: 500;
                    color: #16140F;
                    text-decoration: none;
                    padding: 0.875rem 1rem;
                    border-radius: 10px;
                    transition: background 0.2s, color 0.2s;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .mobile-nav-link:hover {
                    background: rgba(29,110,232,0.06);
                    color: #1D6EE8;
                }

                .mobile-nav-link svg {
                    opacity: 0.3;
                    transition: opacity 0.2s, transform 0.2s;
                }

                .mobile-nav-link:hover svg {
                    opacity: 1;
                    transform: translateX(3px);
                }

                .mobile-nav-footer {
                    padding: 1.25rem 1.5rem;
                    border-top: 1px solid rgba(0,0,0,0.07);
                }

                .mobile-cta {
                    display: block;
                    text-align: center;
                    background: #1D6EE8;
                    color: #fff;
                    text-decoration: none;
                    padding: 0.875rem 1.5rem;
                    border-radius: 10px;
                    font-family: 'Syne', sans-serif;
                    font-size: 0.9rem;
                    font-weight: 700;
                    letter-spacing: 0.02em;
                    box-shadow: 0 4px 16px rgba(29,110,232,0.3);
                    transition: filter 0.2s;
                }

                .mobile-cta:hover { filter: brightness(1.08); }

                /* ── FOOTER ── */
                .site-footer {
                    background: #16140F;
                    color: rgba(255,255,255,0.6);
                }

                .footer-inner {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 3.5rem 2rem 2.5rem;
                }

                .footer-top {
                    display: grid;
                    grid-template-columns: 1.5fr 1fr 1fr;
                    gap: 3rem;
                    padding-bottom: 2.5rem;
                    border-bottom: 1px solid rgba(255,255,255,0.08);
                    margin-bottom: 2rem;
                }

                .footer-brand-name {
                    font-family: 'Syne', sans-serif;
                    font-size: 1.25rem;
                    font-weight: 800;
                    color: #fff;
                    letter-spacing: -0.02em;
                    margin-bottom: 0.875rem;
                }

                .footer-tagline {
                    font-size: 0.875rem;
                    line-height: 1.7;
                    font-weight: 300;
                    max-width: 260px;
                }

                .footer-col-title {
                    font-family: 'Syne', sans-serif;
                    font-size: 0.7rem;
                    font-weight: 700;
                    letter-spacing: 0.16em;
                    text-transform: uppercase;
                    color: rgba(255,255,255,0.35);
                    margin-bottom: 1.25rem;
                }

                .footer-links {
                    display: flex;
                    flex-direction: column;
                    gap: 0.625rem;
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .footer-links a {
                    color: rgba(255,255,255,0.55);
                    text-decoration: none;
                    font-size: 0.875rem;
                    font-weight: 300;
                    transition: color 0.2s;
                }

                .footer-links a:hover { color: #fff; }

                .footer-bottom {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-size: 0.8125rem;
                    font-weight: 300;
                }

                /* ── RESPONSIVE ── */
                @media (max-width: 767px) {
                    .nav-desktop { display: none; }
                    .hamburger { display: flex; }
                    .mobile-overlay { display: block; }
                    .navbar-inner { padding: 0 1.25rem; }

                    .footer-top { grid-template-columns: 1fr; gap: 2rem; }
                    .footer-bottom { flex-direction: column; gap: 0.5rem; text-align: center; }
                    .footer-inner { padding: 2.5rem 1.25rem 2rem; }
                }

                @media (max-width: 1024px) and (min-width: 768px) {
                    .nav-link { padding: 0.5rem 0.625rem; font-size: 0.8125rem; }
                    .navbar-inner { padding: 0 1.5rem; }
                    .footer-top { grid-template-columns: 1fr 1fr; }
                }
            `}</style>

            {/* ── NAVBAR ── */}
            <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
                <div className="navbar-inner">
                    {/* Brand */}
                    <Link href="/" className="brand">
                        Corp<span>Brand.</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="nav-desktop" aria-label="Navigasi utama">
                        {navLinks.slice(0, -1).map(({ href, label }) => (
                            <Link key={href} href={href} className="nav-link">{label}</Link>
                        ))}
                        <Link href="/contact" className="nav-cta">Kontak</Link>
                    </nav>

                    {/* Hamburger (mobile) */}
                    <button
                        className={`hamburger${menuOpen ? ' open' : ''}`}
                        onClick={() => setMenuOpen(v => !v)}
                        aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
                        aria-expanded={menuOpen}
                    >
                        <span className="ham-line" />
                        <span className="ham-line" />
                        <span className="ham-line" />
                    </button>
                </div>
            </header>

            {/* ── MOBILE DRAWER ── */}
            <div
                className={`mobile-overlay${menuOpen ? ' visible' : ''}`}
                onClick={() => setMenuOpen(false)}
                aria-hidden="true"
            />

            <nav className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-label="Navigasi mobile">
                <div className="mobile-menu-header">
                    <Link href="/" className="brand" onClick={() => setMenuOpen(false)}>
                        Corp<span>Brand.</span>
                    </Link>
                    <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Tutup menu">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16140F" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>

                <div className="mobile-nav">
                    {navLinks.slice(0, -1).map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="mobile-nav-link"
                            onClick={() => setMenuOpen(false)}
                        >
                            {label}
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"/>
                            </svg>
                        </Link>
                    ))}
                </div>

                <div className="mobile-nav-footer">
                    <Link href="/contact" className="mobile-cta" onClick={() => setMenuOpen(false)}>
                        Hubungi Kami
                    </Link>
                </div>
            </nav>

            {/* ── MAIN CONTENT ── */}
            <main style={{ flexGrow: 1 }}>
                {children}
            </main>

            {/* ── FOOTER ── */}
            <footer className="site-footer">
                <div className="footer-inner">
                    <div className="footer-top">
                        <div>
                            <div className="footer-brand-name">CorpBrand.</div>
                            <p className="footer-tagline">
                                Solusi teknologi terpercaya untuk transformasi digital bisnis Anda — dari web hingga cloud.
                            </p>
                        </div>
                        <div>
                            <p className="footer-col-title">Navigasi</p>
                            <ul className="footer-links">
                                {navLinks.map(({ href, label }) => (
                                    <li key={href}><Link href={href}>{label}</Link></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="footer-col-title">Kontak</p>
                            <ul className="footer-links">
                                <li><a href="mailto:hello@corpbrand.id">hello@corpbrand.id</a></li>
                                <li><a href="tel:+6221000000">+62 21 000 000</a></li>
                                <li><a href="#">Jakarta, Indonesia</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <span>&copy; {new Date().getFullYear()} CorpBrand. All rights reserved.</span>
                        <span>Crafted with precision.</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}