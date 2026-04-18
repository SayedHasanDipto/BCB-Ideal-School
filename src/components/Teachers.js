const TEACHERS = [
  { emoji: '👨‍🏫', name: 'Md Abul Hossen Abir', role: 'Principal', roleColor: 'navy', avatarColor: 'navy', qual: 'M.Ed — University of Dhaka' },
  { emoji: '👩‍🔬', name: 'Nazmul Sarkar', role: 'Science HOD', roleColor: 'forest', avatarColor: 'forest', qual: 'M.Sc Physics, BUET' },
  { emoji: '👨‍💻', name: 'Abu Hashem', role: 'Mathematics', roleColor: 'crimson', avatarColor: 'crimson', qual: 'M.Sc Mathematics, DU' },
  { emoji: '👩‍🎨', name: 'Mst Shaila', role: 'Bangla & Arts', roleColor: 'gold', avatarColor: 'gold', qual: 'M.A Bangla Literature' },
  { emoji: '👨‍🌍', name: 'Sayed Hasan Dipto', role: 'English & ICT', roleColor: 'navy', avatarColor: 'navy', qual: 'M.A English, SUST' },
  { emoji: '👩‍🏫', name: 'Abu Sayed Rana', role: 'Social Studies', roleColor: 'forest', avatarColor: 'forest', qual: 'M.SS, Jahangirnagar Uni.' },
  { emoji: '👨‍⚕️', name: 'Md. Sarwar Hossen Shakil', role: 'Biology', roleColor: 'crimson', avatarColor: 'crimson', qual: 'PhD Life Sciences, DU' },
  { emoji: '👩‍💼', name: 'Abu Sayed Rana', role: 'Counselor', roleColor: 'gold', avatarColor: 'gold', qual: 'M.A Psychology, RU' },
];

const ROLE_COLORS = {
  navy: 'var(--navy)',
  crimson: 'var(--crimson)',
  forest: 'var(--forest)',
  gold: 'var(--gold)',
};

export default function Teachers() {
  return (
    <section id="teachers" className="teachers">
      <div className="container">
        <div className="section-label" style={{ color: 'var(--forest)' }}>
          শিক্ষকমণ্ডলী
        </div>
        <h2 className="section-title" style={{ color: 'var(--navy)' }}>
          অভিজ্ঞ ও নিবেদিত শিক্ষকবৃন্দ
        </h2>
        <div className="section-rule" style={{ background: 'var(--forest)' }} />
        <p className="section-sub">
          আমাদের শিক্ষকরা দক্ষ, অভিজ্ঞ এবং প্রতিটি শিক্ষার্থীর
          সাফল্যে সম্পূর্ণ প্রতিশ্রুতিবদ্ধ।
        </p>

        <div className="teachers__grid">
          {TEACHERS.map(({ emoji, name, role, roleColor, avatarColor, qual }) => (
            <div className="teacher-card" key={name}>
              <div className={`teacher-card__avatar teacher-card__avatar--${avatarColor}`}>
                {emoji}
              </div>
              <div className="teacher-card__body">
                <div className="teacher-card__name">{name}</div>
                <div
                  className={`teacher-card__role teacher-card__role--${roleColor}`}
                  style={{ color: ROLE_COLORS[roleColor] }}
                >
                  {role}
                </div>
                <div className="teacher-card__qual">{qual}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
