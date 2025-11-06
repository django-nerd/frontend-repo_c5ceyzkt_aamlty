import { useEffect } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function useScrollFade() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-fade]');
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add('opacity-100');
            el.classList.remove('opacity-0');
          } else {
            el.classList.add('opacity-0');
            el.classList.remove('opacity-100');
          }
        });
      },
      { threshold: 0.3 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function App() {
  useScrollFade();

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Simple sticky nav */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="font-semibold">Estate Co.</a>
          <nav className="hidden gap-6 text-sm text-neutral-700 sm:flex">
            <a href="#home" className="hover:text-neutral-900">Home</a>
            <a href="#about" className="hover:text-neutral-900">About</a>
            <a href="#projects" className="hover:text-neutral-900">Projects</a>
            <a href="#contact" className="hover:text-neutral-900">Contact</a>
          </nav>
        </div>
      </header>

      <main className="space-y-2">
        <div data-fade className="opacity-0 transition-opacity duration-700 ease-out"><Hero /></div>
        <div data-fade className="opacity-0 transition-opacity duration-700 ease-out"><About /></div>
        <div data-fade className="opacity-0 transition-opacity duration-700 ease-out"><Projects /></div>
        <div data-fade className="opacity-0 transition-opacity duration-700 ease-out"><Contact /></div>
      </main>

      <footer className="border-t border-neutral-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 text-sm text-neutral-600">
          © {new Date().getFullYear()} Estate Co. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
