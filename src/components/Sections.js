'use client';
import { useState } from 'react';

// ─── GALLERY ────────────────────────────────────────────────────
const GALLERY_ITEMS = [
  { emoji: '🏫', label: 'আমাদের ক্যাম্পাস', cls: 'gallery__item--1' },
  { emoji: '⚽', label: 'খেলাধুলা',           cls: 'gallery__item--2 gallery__item--tall' },
  { emoji: '🔬', label: 'বিজ্ঞান ল্যাব',      cls: 'gallery__item--3' },
  { emoji: '📚', label: 'পাঠাগার',            cls: 'gallery__item--4' },
  { emoji: '🎭', label: 'সাংস্কৃতিক অনুষ্ঠান', cls: 'gallery__item--5' },
];

export function Gallery({ showToast }) {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-label" style={{ color: 'var(--gold-lt)' }}>গ্যালারি</div>
        <h2 className="section-title" style={{ color: '#fff' }}>স্কুল জীবনের ঝলক</h2>
        <div className="section-rule" style={{ background: 'var(--gold)' }} />
        <p className="section-sub" style={{ color: 'rgba(255,255,255,.52)' }}>
          ক্লাসরুম থেকে মাঠ, বিজ্ঞান ল্যাব থেকে সাংস্কৃতিক মঞ্চ — জীবন্ত স্কুল জীবন।
        </p>

        <div className="gallery__grid">
          {GALLERY_ITEMS.map(({ emoji, label, cls }) => (
            <div
              key={label}
              className={`gallery__item ${cls}`}
              onClick={() => showToast(`📸 দেখা হচ্ছে: ${label}`)}
            >
              {emoji}
              <div className="gallery__overlay">
                <span className="gallery__overlay-label">{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ADMISSION ──────────────────────────────────────────────────
const STEPS = [
  ['আবেদন ফর্ম পূরণ',    'অনলাইন বা সরাসরি স্কুলে এসে ফর্ম পূরণ করুন।'],
  ['কাগজপত্র জমা দিন',  'জন্ম নিবন্ধন, আগের রিপোর্ট কার্ড ও ছবি জমা দিন।'],
  ['ভর্তি পরীক্ষায় বসুন', 'নির্ধারিত দিনে লিখিত পরীক্ষা ও সাক্ষাৎকার অনুষ্ঠিত হবে।'],
  ['ভর্তি নিশ্চিত করুন', 'নির্বাচিত হলে নির্ধারিত ফি প্রদানের মাধ্যমে ভর্তি সম্পন্ন করুন।'],
];

const CLASSES = [
  'শিশু শ্রেণি (KG)', 'প্রথম শ্রেণি', 'দ্বিতীয় শ্রেণি',
  'তৃতীয় শ্রেণি',   'চতুর্থ শ্রেণি', 'পঞ্চম শ্রেণি',
  'ষষ্ঠ শ্রেণি',     'সপ্তম শ্রেণি',  'অষ্টম শ্রেণি',
  'নবম শ্রেণি',      'দশম শ্রেণি',
];

export function Admission({ onModal }) {
  const [form, setForm] = useState({ name: '', guardian: '', phone: '', cls: '' });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = () => {
    if (!form.name || !form.phone || !form.cls) {
      onModal({ type: 'error', msg: 'সকল বাধ্যতামূলক তথ্য পূরণ করুন।' });
      return;
    }
    onModal({ type: 'success', name: form.name, cls: form.cls });
    setForm({ name: '', guardian: '', phone: '', cls: '' });
  };

  return (
    <section id="admission" className="admission">
      <div className="container">
        <div className="admission__inner">
          {/* Left: info */}
          <div>
            <div className="section-label admission__eyebrow">ভর্তি ২০২৫–২৬</div>
            <h2 className="section-title admission__title">
              B.C.B Ideal School<br />পরিবারে যোগ দিন
            </h2>
            <p className="admission__sub">
              শিশু শ্রেণি থেকে দশম শ্রেণি পর্যন্ত ভর্তি চলছে। আজই
              আবেদন করুন এবং আপনার সন্তানের উজ্জ্বল ভবিষ্যৎ গড়ে তুলুন।
            </p>

            <div className="admission__steps">
              {STEPS.map(([title, desc], i) => (
                <div className="admission__step" key={title}>
                  <div className="admission__step-num">{i + 1}</div>
                  <div>
                    <div className="admission__step-title">{title}</div>
                    <div className="admission__step-desc">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="admission__form">
            <div className="form__header">
              <img
                src="/logo.png"
                alt="BCB"
                className="form__header-logo"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="form__title">ভর্তির জন্য তথ্য দিন</div>
            </div>

            <div className="form__row">
              <div className="form__group">
                <label className="form__label">শিক্ষার্থীর নাম *</label>
                <input className="form__input" placeholder="পুরো নাম" value={form.name} onChange={set('name')} />
              </div>
              <div className="form__group">
                <label className="form__label">অভিভাবকের নাম</label>
                <input className="form__input" placeholder="পিতা/মাতার নাম" value={form.guardian} onChange={set('guardian')} />
              </div>
            </div>

            <div className="form__group">
              <label className="form__label">মোবাইল নম্বর *</label>
              <input className="form__input" placeholder="01XXXXXXXXX" value={form.phone} onChange={set('phone')} />
            </div>

            <div className="form__group">
              <label className="form__label">যে শ্রেণিতে ভর্তি হবেন *</label>
              <select className="form__select" value={form.cls} onChange={set('cls')}>
                <option value="">— শ্রেণি বেছে নিন —</option>
                {CLASSES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>

            <button className="btn btn-navy form__submit" onClick={submit}>
              আবেদন জমা দিন →
            </button>
            <p className="form__note">আমরা ২৪ ঘণ্টার মধ্যে যোগাযোগ করব।</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ────────────────────────────────────────────────────
const CONTACT_CARDS = [
  { col: 'crimson', icon: '📍', title: 'ঠিকানা',       text: 'B.C.B Ideal School\nবকশীগঞ্জ, জামালপুর\nবাংলাদেশ' },
  { col: 'navy',    icon: '📞', title: 'ফোন নম্বর',    text: '01700-XXXXXX (অফিস)\n01800-XXXXXX (অধ্যক্ষ)' },
  { col: 'forest',  icon: '✉️', title: 'ইমেইল',        text: 'info@bcbidealschool.edu.bd\nadmission@bcbidealschool.edu.bd' },
  { col: 'gold',    icon: '🕐', title: 'স্কুলের সময়', text: 'রবিবার–বৃহস্পতিবার\nসকাল ৮:০০ – দুপুর ১:৩০' },
];

export function Contact({ showToast }) {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-label" style={{ color: 'var(--gold)' }}>যোগাযোগ</div>
        <h2 className="section-title" style={{ color: 'var(--navy)' }}>আমাদের সাথে যোগাযোগ করুন</h2>
        <div className="section-rule" style={{ background: 'var(--gold)' }} />

        <div className="contact__grid">
          <div className="contact__cards">
            {CONTACT_CARDS.map(({ col, icon, title, text }) => (
              <div key={title} className={`contact-card contact-card--${col}`}>
                <div className={`contact-card__icon contact-card__icon--${col}`}>{icon}</div>
                <div>
                  <div className="contact-card__title">{title}</div>
                  <div className="contact-card__text">{text}</div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="map-panel">
              <div className="map-panel__inner">
                <div className="map-panel__icon">🗺️</div>
                <div className="map-panel__name">B.C.B Ideal School</div>
                <div className="map-panel__sub">বকশীগঞ্জ, জামালপুর, বাংলাদেশ</div>
                <button
                  className="btn btn-primary"
                  onClick={() => showToast('🗺️ Google Maps খোলা হচ্ছে...')}
                >
                  ম্যাপে দেখুন
                </button>
              </div>
              <div className="social-row">
                {[
                  ['📘 Facebook', 'fb',  'Facebook'],
                  ['📺 YouTube', 'yt',  'YouTube'],
                  ['💬 WhatsApp', 'wa', 'WhatsApp'],
                ].map(([label, cls, name]) => (
                  <button
                    key={name}
                    className={`social-btn social-btn--${cls}`}
                    onClick={() => showToast(`${name} এ যোগ দিন!`)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ─────────────────────────────────────────────────────
export function Footer() {
  const cols = [
    { head: 'একাডেমিক',   items: ['শিশু শ্রেণি', 'প্রাথমিক', 'নিম্ন মাধ্যমিক', 'মাধ্যমিক (SSC)'] },
    { head: 'স্কুল',       items: ['আমাদের সম্পর্কে', 'শিক্ষকমণ্ডলী', 'সুযোগ-সুবিধা', 'গ্যালারি'] },
    { head: 'দ্রুত লিঙ্ক', items: ['ভর্তি', 'নোটিশ', 'ফলাফল', 'যোগাযোগ'] },
  ];

  return (
    <footer>
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div>
            <div className="footer__brand-logo">
              <img
                src="/logo.png"
                alt="BCB"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div>
                <div className="footer__brand-name">B.C.B Ideal School</div>
                <div className="footer__brand-sub">Bakshiganj, Jamalpur</div>
              </div>
            </div>
            <p className="footer__brand-desc">
              মানসম্পন্ন শিক্ষা ও নৈতিক মূল্যবোধের মাধ্যমে শিক্ষার্থীদের
              সুন্দর ভবিষ্যৎ গড়ে তোলাই আমাদের লক্ষ্য।
            </p>
          </div>

          {cols.map(({ head, items }) => (
            <div className="footer__col" key={head}>
              <h4>{head}</h4>
              <ul>
                {items.map((item) => (
                  <li key={item}><a href="#">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <span>© ২০২৫ <em>B.C.B Ideal School</em> — সর্বস্বত্ব সংরক্ষিত।</span>
          <span>বকশীগঞ্জ, জামালপুর, বাংলাদেশ 🇧🇩</span>
        </div>
      </div>
    </footer>
  );
}
