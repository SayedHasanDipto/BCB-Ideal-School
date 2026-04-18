const PROGRAMS = [
  {
    icon: '🌱', grade: 'Pre-Primary', title: 'Kindergarten',
    desc:  'খেলার ছলে প্রাথমিক ভাষা, গণনা এবং সৃজনশীলতার বিকাশ।',
    tags:  ['বাংলা', 'ইংরেজি', 'অঙ্কন', 'গণিত'],
  },
  {
    icon: '📖', grade: 'Primary · I–V', title: 'প্রাথমিক শ্রেণি',
    desc:  'মূল বিষয়গুলোতে শক্ত ভিত গড়ে তোলা এবং সহশিক্ষা কার্যক্রম।',
    tags:  ['বাংলা', 'ইংরেজি', 'গণিত', 'বিজ্ঞান', 'সমাজ'],
  },
  {
    icon: '🔬', grade: 'Junior · VI–VIII', title: 'নিম্ন মাধ্যমিক',
    desc:  'বিজ্ঞান, আইসিটি ও মানবিক বিষয়ে বিস্তৃত পাঠ্যক্রম।',
    tags:  ['পদার্থ', 'রসায়ন', 'আইসিটি', 'ইতিহাস'],
  },
  {
    icon: '🏆', grade: 'Secondary · IX–X', title: 'মাধ্যমিক (SSC)',
    desc:  'অভিজ্ঞ শিক্ষকমণ্ডলীর তত্ত্বাবধানে নিবিড় এসএসসি প্রস্তুতি।',
    tags:  ['SSC বোর্ড', 'বিজ্ঞান', 'গণিত', 'ইংরেজি'],
  },
];

export default function Programs({ onModal }) {
  return (
    <section id="programs" className="programs">
      <div className="container">
        <div className="section-label" style={{ color: 'var(--gold-lt)' }}>
          একাডেমিক প্রোগ্রাম
        </div>
        <h2 className="section-title" style={{ color: '#fff' }}>
          আমাদের ক্লাস ও কারিকুলাম
        </h2>
        <div className="section-rule" style={{ background: 'var(--gold)' }} />
        <p className="section-sub">
          শিশু শ্রেণি থেকে এসএসসি পর্যন্ত প্রতিটি স্তরে সর্বোচ্চ মানের
          শিক্ষা নিশ্চিত করা হয়।
        </p>

        <div className="programs__grid">
          {PROGRAMS.map((p) => (
            <div
              className="program-card"
              key={p.title}
              onClick={() => onModal({ type: 'program', ...p })}
            >
              <div className="program-card__icon">{p.icon}</div>
              <div className="program-card__grade">{p.grade}</div>
              <div className="program-card__title">{p.title}</div>
              <div className="program-card__desc">{p.desc}</div>
              <div className="program-card__tags">
                {p.tags.map((t) => (
                  <span className="program-card__tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
