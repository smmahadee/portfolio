import Footer from './footer/Footer';
import Header from './header/Header';

export default function Layout({ children }) {
  return (
    <div className="container mx-auto max-w-6xl px-4">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
