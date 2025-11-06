import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="font-inter text-neutral-900">
      {/* Simple sticky header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-sm font-semibold tracking-tight">LumiEstate</a>
          <nav className="hidden gap-6 text-sm text-neutral-700 sm:flex">
            <a className="hover:text-neutral-900" href="#home">Home</a>
            <a className="hover:text-neutral-900" href="#about">About</a>
            <a className="hover:text-neutral-900" href="#projects">Projects</a>
            <a className="hover:text-neutral-900" href="#services">Interior & Loans</a>
            <a className="hover:text-neutral-900" href="#contact">Contact</a>
          </nav>
          <a href="#admin" className="rounded-full bg-neutral-900 px-4 py-2 text-xs text-white hover:bg-neutral-800">Admin</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>

      <footer className="border-t border-neutral-200 bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 text-sm text-neutral-600">
          © {new Date().getFullYear()} LumiEstate. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
