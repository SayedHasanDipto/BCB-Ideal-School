import './globals.css';

export const metadata = {
  title: 'B.C.B Ideal School — Bakshiganj, Jamalpur',
  description:
    'B.C.B Ideal School, Bakshiganj, Jamalpur. Providing quality education and holistic development since 2022.',
  keywords: 'BCB Ideal School, Bakshiganj, Jamalpur, School Bangladesh, Admission 2025',
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        /> */}
      </head>
      <body>{children}</body>
    </html>
  );
}
