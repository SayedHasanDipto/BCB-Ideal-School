'use client';
import { useState, useEffect } from 'react';
import LogoImg from '../../public/logo.png'

const LINKS = ['home', 'about', 'programs', 'notices', 'teachers', 'gallery', 'contact'];

export default function Navbar({ onNav }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    onNav?.(id);
  };

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      {/* Logo */}
      <div className="nav__logo" onClick={() => go('home')}>
        <img src="/logo.png" alt="BCB Ideal School Logo" className="nav__logo-img" onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }} />
        <div className="nav__logo-fallback" style={{ display: 'none' }}>BCB</div>
        <div>
          <div className="nav__logo-name">B.C.B Ideal School</div>
          <div className="nav__logo-loc">Bakshiganj, Jamalpur</div>
        </div>
      </div>

      {/* Links */}
      <ul className="nav__links">
        {LINKS.map((id) => (
          <li key={id}>
            <span
              className={`nav__link ${active === id ? 'nav__link--active' : ''}`}
              onClick={() => go(id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button className="btn btn-primary" onClick={() => go('admission')}>
        ভর্তি হন
      </button>
    </nav>
  );
}
