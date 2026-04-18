const NOTICES = [
  {
    col: 'crimson', day: '20', mon: 'Apr',
    title: 'বার্ষিক পরীক্ষার সময়সূচি ২০২৫',
    desc:  'ষষ্ঠ থেকে দশম শ্রেণির বার্ষিক পরীক্ষার সময়সূচি প্রকাশিত হয়েছে। নোটিশ বোর্ড থেকে দেখে নিন।',
    badge: 'exam',
  },
  {
    col: 'forest', day: '25', mon: 'Apr',
    title: 'ঈদ-উল-ফিতর ছুটির বিজ্ঞপ্তি',
    desc:  '২৫ এপ্রিল থেকে ২ মে পর্যন্ত স্কুল বন্ধ থাকবে। সকলকে ঈদ মোবারক!',
    badge: 'holiday',
  },
  {
    col: 'navy', day: '05', mon: 'May',
    title: 'বার্ষিক ক্রীড়া প্রতিযোগিতা ২০২৫',
    desc:  '৫ মে স্কুল মাঠে বার্ষিক ক্রীড়া প্রতিযোগিতা অনুষ্ঠিত হবে। সকল শিক্ষার্থীর উপস্থিতি বাধ্যতামূলক।',
    badge: 'sport',
  },
  {
    col: 'gold', day: '12', mon: 'May',
    title: 'বিজ্ঞান মেলায় নিবন্ধন',
    desc:  'আন্তঃবিদ্যালয় বিজ্ঞান মেলায় অংশগ্রহণ করতে ইচ্ছুক শিক্ষার্থীরা ১০ মে-র মধ্যে নিবন্ধন করুন।',
    badge: 'event',
  },
];

const QUICK_LINKS = [
  ['📄', 'ভর্তি ফর্ম'],
  ['📅', 'পরীক্ষার সময়সূচি'],
  ['📊', 'ফলাফল'],
  ['📚', 'সিলেবাস ২০২৫'],
  ['🧾', 'ফি চার্ট'],
  ['🏅', 'মেধা তালিকা'],
];

export default function Notices({ onModal, showToast }) {
  return (
    <section id="notices" className="notices">
      <div className="container">
        <div className="section-label" style={{ color: 'var(--navy)' }}>নোটিশ বোর্ড</div>
        <h2 className="section-title" style={{ color: 'var(--navy)' }}>
          সর্বশেষ নোটিশ ও ঘোষণা
        </h2>
        <div className="section-rule" style={{ background: 'var(--navy)' }} />

        <div className="notices__layout">
          {/* Notice list */}
          <ul className="notices__list">
            {NOTICES.map((n) => (
              <li
                key={n.title}
                className={`notice-item notice-item--${n.col}`}
                onClick={() => onModal({ type: 'notice', ...n })}
              >
                <div className={`notice-item__date notice-item__date--${n.col}`}>
                  <div className="notice-item__day">{n.day}</div>
                  <div className="notice-item__mon">{n.mon}</div>
                </div>
                <div>
                  <div className="notice-item__title">{n.title}</div>
                  <div className="notice-item__desc">{n.desc}</div>
                  <span className={`notice-badge notice-badge--${n.badge}`}>{n.badge}</span>
                </div>
              </li>
            ))}
          </ul>

          {/* Sidebar */}
          <div className="sidebar">
            <div className="sidebar__box">
              <div className="sidebar__title">🔗 দ্রুত লিঙ্ক</div>
              <ul className="quick-links">
                {QUICK_LINKS.map(([icon, label]) => (
                  <li key={label}>
                    <a
                      href="#"
                      className="quick-link"
                      onClick={(e) => { e.preventDefault(); showToast(`✓ খোলা হচ্ছে: ${label}`); }}
                    >
                      <span className="quick-link__icon">{icon}</span>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar__box sidebar__box--dark">
              <div className="sidebar__title">📞 জরুরি যোগাযোগ</div>
              <p className="sidebar__contact-line">
                প্রধান অফিস:<br />
                <strong>01700-XXXXXX</strong><br />
                অধ্যক্ষ:<br />
                <strong>01800-XXXXXX</strong><br />
                রবি–বৃহস্পতি: সকাল ৮টা–৪টা
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
