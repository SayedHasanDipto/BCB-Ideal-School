'use client';

export function Modal({ modal, onClose, onNav }) {
  if (!modal) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">✕</button>

        {modal.type === 'success' && (
          <>
            <div style={{ fontSize: '2.8rem', textAlign: 'center', marginBottom: '.5rem' }}>🎉</div>
            <h2 className="modal__title" style={{ textAlign: 'center' }}>আবেদন সফল হয়েছে!</h2>
            <p className="modal__text" style={{ textAlign: 'center', marginTop: '.8rem' }}>
              <strong>{modal.name}</strong> এর <strong>{modal.cls}</strong> শ্রেণিতে ভর্তির আবেদন
              গ্রহণ করা হয়েছে। আমরা ২৪ ঘণ্টার মধ্যে যোগাযোগ করব।
            </p>
            <button className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem', justifyContent: 'center' }} onClick={onClose}>
              ঠিক আছে
            </button>
          </>
        )}

        {modal.type === 'error' && (
          <>
            <div style={{ fontSize: '2.8rem', textAlign: 'center', marginBottom: '.5rem' }}>⚠️</div>
            <h2 className="modal__title" style={{ textAlign: 'center' }}>অসম্পূর্ণ তথ্য</h2>
            <p className="modal__text" style={{ textAlign: 'center', marginTop: '.8rem' }}>{modal.msg}</p>
            <button className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem', justifyContent: 'center' }} onClick={onClose}>
              ঠিক আছে
            </button>
          </>
        )}

        {modal.type === 'program' && (
          <>
            <div style={{ fontSize: '2.5rem', marginBottom: '.5rem' }}>{modal.icon}</div>
            <div style={{ fontSize: '.65rem', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '.4rem' }}>
              {modal.grade}
            </div>
            <h2 className="modal__title">{modal.title}</h2>
            <p className="modal__text" style={{ marginTop: '.8rem', marginBottom: '1rem' }}>{modal.desc}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginBottom: '1.5rem' }}>
              {modal.tags.map((t) => (
                <span key={t} style={{ background: 'var(--navy-tint)', color: 'var(--navy)', padding: '.2rem .7rem', borderRadius: '50px', fontSize: '.7rem', fontWeight: 600 }}>
                  {t}
                </span>
              ))}
            </div>
            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => { onClose(); onNav('admission'); }}>
              এই শ্রেণিতে ভর্তি হন
            </button>
          </>
        )}

        {modal.type === 'notice' && (
          <>
            <span className={`notice-badge notice-badge--${modal.badge}`}>{modal.badge}</span>
            <h2 className="modal__title" style={{ marginTop: '.8rem' }}>{modal.title}</h2>
            <p className="modal__text" style={{ marginTop: '.8rem' }}>{modal.desc}</p>
            <p style={{ marginTop: '1rem', fontSize: '.72rem', color: 'var(--ink-light)' }}>
              তারিখ: {modal.day} {modal.mon} ২০২৫
            </p>
            <button className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem', justifyContent: 'center' }} onClick={onClose}>
              বন্ধ করুন
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export function Toast({ message }) {
  return (
    <div className={`toast ${message ? 'toast--show' : ''}`}>
      {message}
    </div>
  );
}
