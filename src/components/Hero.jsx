import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section id="home" ref={ref} className="relative min-h-[90vh] overflow-hidden bg-white">
      {/* Parallax background layers */}
      <motion.div style={{ y: y2, opacity }} className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-200 via-white to-pink-100 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-teal-100 via-white to-sky-200 blur-3xl" />
      </motion.div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-6xl"
        >
          Cinematic Real Estate Experiences
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.1 }}
          className="mt-4 max-w-2xl text-lg text-neutral-600"
        >
          Discover projects, interior design, and home loan guidance — presented with subtle motion, parallax depth, and a light aesthetic.
        </motion.p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#projects" className="rounded-full bg-neutral-900 px-6 py-3 text-white transition-colors hover:bg-neutral-800">
            Explore Projects
          </a>
          <a href="#contact" className="rounded-full border border-neutral-300 px-6 py-3 text-neutral-800 transition-colors hover:bg-neutral-50">
            Contact Us
          </a>
        </div>
      </div>

      {/* Foreground parallax card */}
      <motion.div style={{ y: y1 }} className="relative z-10 mx-auto mt-16 max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="overflow-hidden rounded-2xl border border-neutral-200 bg-white/60 shadow-xl backdrop-blur"
        >
          <div className="aspect-[16/9] w-full bg-gradient-to-tr from-neutral-100 via-white to-neutral-50" />
          <div className="p-6">
            <p className="text-sm uppercase tracking-wider text-neutral-500">Featured</p>
            <h3 className="mt-1 text-xl font-medium text-neutral-900">Skyline Residences</h3>
            <p className="mt-2 text-neutral-600">Panoramic city views, resort-style amenities, and contemporary interiors.</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
