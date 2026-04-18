const FEATURES = [
  {
    icon: '🏆', bg: 'var(--crimson-tint)',
    title: 'স্বীকৃত ও পুরস্কৃত প্রতিষ্ঠান',
    desc:  'সরকার অনুমোদিত কারিকুলাম এবং অভিজ্ঞ শিক্ষকমণ্ডলী দ্বারা পরিচালিত বিশ্বস্ত শিক্ষা প্রতিষ্ঠান।',
  },
  {
    icon: '💡', bg: 'var(--navy-tint)',
    title: 'আধুনিক শিক্ষা সুবিধা',
    desc:  'বিজ্ঞান ল্যাবরেটরি, ডিজিটাল ক্লাসরুম, সমৃদ্ধ পাঠাগার এবং প্রশস্ত খেলার মাঠ।',
  },
  {
    icon: '🌿', bg: 'var(--forest-tint)',
    title: 'সামগ্রিক ব্যক্তিত্ব বিকাশ',
    desc:  'পড়াশোনার পাশাপাশি খেলাধুলা, সাংস্কৃতিক কর্মকাণ্ড এবং নৈতিক শিক্ষায় সমান গুরুত্ব।',
  },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__grid">

          {/* Visual column */}
          <div className="about__visual">
            <div className="about__card-main">
              <img
                src="/logo.png"
                alt="BCB Logo"
                className="about__card-main-logo"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <blockquote className="about__card-main-quote">
                "জ্ঞান অর্জনই সর্বোত্তম বিনিয়োগ —<br />
                B.C.B Ideal School সেই পথ আলোকিত করে।"
              </blockquote>
            </div>

            <div className="about__card-accent">
              <div className="about__card-accent-num">২০২২</div>
              <div className="about__card-accent-lbl">প্রতিষ্ঠার সাল</div>
            </div>

            <div className="about__card-badge">🎓</div>
          </div>

          {/* Text column */}
          <div>
            <div className="section-label" style={{ color: 'var(--crimson)' }}>
              আমাদের সম্পর্কে
            </div>
            <h2 className="section-title" style={{ color: 'var(--navy)' }}>
              শিক্ষায় নতুন<br />আলোর পথ
            </h2>
            <div className="section-rule" style={{ background: 'var(--crimson)' }} />
            <p className="section-sub">
              বকশীগঞ্জ, জামালপুরে ২০২২ সালে প্রতিষ্ঠিত B.C.B Ideal School
              শিশু থেকে এসএসসি পর্যন্ত প্রতিটি শিক্ষার্থীর সামগ্রিক বিকাশ
              নিশ্চিত করতে নিরলসভাবে কাজ করে যাচ্ছে।
            </p>

            <div className="about__features">
              {FEATURES.map(({ icon, bg, title, desc }) => (
                <div className="about__feature" key={title}>
                  <div className="about__feature-icon" style={{ background: bg }}>
                    {icon}
                  </div>
                  <div>
                    <div className="about__feature-title">{title}</div>
                    <div className="about__feature-desc">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
