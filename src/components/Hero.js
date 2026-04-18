export default function Hero({ onNav }) {
  return (
    <section id="home" className="hero">
      <div className="hero__texture" />
      {/* decorative leaves */}
      <div className="hero__leaves" aria-hidden="true">
        <span className="hero__leaf">🌿</span>
        <span className="hero__leaf hero__leaf--right">🌿</span>
      </div>

      <div className="container">
        <div className="hero__content">
          {/* Logo */}
          <div className="hero__logo-wrap">
            <img
              src="/logo.png"
              alt="B.C.B Ideal School Logo"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>

          {/* Eyebrow */}
          <div className="hero__eyebrow">
            ⭐ প্রতিষ্ঠিত ২০২২ &nbsp;·&nbsp; বকশীগঞ্জ, জামালপুর ⭐
          </div>

          {/* Title */}
          <h1 className="hero__title">
            B.C.B <em>Ideal</em><br />School
          </h1>

          {/* Location */}
          <p className="hero__location">
            📍 <strong>বকশীগঞ্জ, জামালপুর</strong>, বাংলাদেশ
          </p>

          {/* Decorative divider */}
          <div className="hero__divider">
            <div className="hero__divider-line" />
            <span className="hero__divider-icon">✒️</span>
            <div className="hero__divider-line hero__divider-line--r" />
          </div>

          {/* Subtitle */}
          <p className="hero__sub">
            মানসম্পন্ন শিক্ষা, নৈতিক মূল্যবোধ এবং সামগ্রিক বিকাশের মাধ্যমে
            শিক্ষার্থীদের উজ্জ্বল ভবিষ্যৎ গড়ে তোলার প্রতিশ্রুতি নিয়ে
            B.C.B Ideal School প্রতিদিন কাজ করে যাচ্ছে।
          </p>

          {/* CTA buttons */}
          <div className="hero__actions">
            <button className="btn btn-primary" onClick={() => onNav('admission')}>
              ভর্তির আবেদন করুন
            </button>
            <button className="btn btn-ghost" onClick={() => onNav('about')}>
              আমাদের সম্পর্কে জানুন
            </button>
          </div>

          {/* Stats strip */}
          <div className="hero__stats">
            {[
              { num: '৫০০+',  label: 'শিক্ষার্থী',       color: '#c8982a' },
              { num: '২৫+',   label: 'অভিজ্ঞ শিক্ষক',    color: '#7a1c2b' },
              { num: '৩',     label: 'বছরের সাফল্য',     color: '#1e5438' },
              { num: '৯৫%',   label: 'পাসের হার',         color: '#a8782a' },
            ].map(({ num, label, color }) => (
              <div className="hero__stat" key={label}>
                <div className="hero__stat-num" style={{ color }}>{num}</div>
                <div className="hero__stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero__arc" />
    </section>
  );
}
