'use client';
import { useState, useEffect, useCallback } from 'react';

import Navbar from '@/components/Navbar';
import Ticker from '@/components/Ticker';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Programs from '@/components/Programs';
import Notices from '@/components/Notices';
import Teachers from '@/components/Teachers';
import { Gallery, Admission, Contact, Footer } from '@/components/Sections';
import { Modal, Toast } from '@/components/UI';

export default function HomePage() {
  const [modal, setModal] = useState(null);
  const [toast, setToast] = useState(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const showToast = useCallback((msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  }, []);

  const nav = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
      <Navbar onNav={nav} />
      <Ticker />

      <main>
        <Hero onNav={nav} />
        <About />
        <Programs onModal={setModal} />
        <Notices onModal={setModal} showToast={showToast} />
        <Teachers />
        <Gallery showToast={showToast} />
        <Admission onModal={setModal} />
        <Contact showToast={showToast} />
      </main>

      <Footer />

      {/* Scroll to top */}
      <button
        className={`scroll-top ${showTop ? 'scroll-top--visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        ↑
      </button>

      {/* Modal */}
      <Modal modal={modal} onClose={() => setModal(null)} onNav={nav} />

      {/* Toast */}
      <Toast message={toast} />
    </>
  );
}
