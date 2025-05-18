import { Footer, Navbar } from '@/components';
import './globals.css';

export const metadata = {
  title: 'Crypto Cards',
  description: 'The largest cryptocurrency database in the world',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen relative bgColor">
        <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
