const ITEMS = [
  '🏫 B.C.B Ideal School, Bakshiganj — শিক্ষায় নতুন আলো, ২০২২ সাল থেকে',
  '📢 ২০২৫–২৬ শিক্ষাবর্ষে ভর্তি চলছে — আজই আবেদন করুন',
  '🏆 আমাদের শিক্ষার্থীরা জেলা বিজ্ঞান অলিম্পিয়াডে পুরস্কার জিতেছে',
  '📅 ঈদ-উল-ফিতর ছুটি: ২৫ এপ্রিল – ২ মে ২০২৫',
  '⚽ বার্ষিক ক্রীড়া প্রতিযোগিতা: ৫ মে ২০২৫ — সকল শিক্ষার্থীকে আমন্ত্রণ',
];

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="ticker" style={{ marginTop: '68px' }}>
      <span className="ticker__label">📢 নোটিশ</span>
      <div className="ticker__track">
        {doubled.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}
