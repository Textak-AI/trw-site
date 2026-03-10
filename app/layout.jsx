import './globals.css';

export const metadata = {
  title: 'Railroad Safety Culture Transformation | The Rail Way™',
  description: 'The Rail Way™ transforms railroad safety culture from the boardroom to the ballast line. Speak Up Culture programs for Class II & III railroads. Led by Pauline Lipkewich, Contributing Editor at Railway Age.',
  openGraph: {
    title: 'Railroad Safety Culture Transformation | The Rail Way™',
    description: 'Build a Speak Up Culture where safety concerns don\'t wait for an accident. From the boardroom to the ballast line.',
    url: 'https://therailway.us',
    siteName: 'The Rail Way™',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
