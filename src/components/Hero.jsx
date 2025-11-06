import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // Parallax layers
  const yHero = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yCard = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.6, 0.3]);
  const blurBackdrop = useTransform(scrollYProgress, [0, 1], ['blur(0px)', 'blur(2px)']);

  return (
    <section id="home" ref={ref} className="relative min-h-[100vh] w-full overflow-hidden bg-white">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient veils to blend Spline with light theme */}
      <motion.div
        aria-hidden
        style={{ opacity: heroOpacity }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/70" />
        <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-white/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-10 h-96 w-96 rounded-full bg-white/50 blur-3xl" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          style={{ y: yHero }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: 'easeOut', delay: 0.1 }}
            className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-6xl"
          >
            Cinematic Real Estate Experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut', delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-neutral-700"
          >
            Light theme with slow, directional motion. Scroll to reveal projects, interiors, and home loan guidance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut', delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a href="#projects" className="rounded-full bg-neutral-900 px-6 py-3 text-white transition-colors hover:bg-neutral-800">
              Explore Projects
            </a>
            <a href="#contact" className="rounded-full border border-neutral-300 bg-white/70 px-6 py-3 text-neutral-900 backdrop-blur transition-colors hover:bg-white">
              Contact Us
            </a>
          </motion.div>
        </motion.div>

        {/* Floating feature card with subtle parallax + glass look */}
        <motion.div style={{ y: yCard, filter: blurBackdrop }} className="relative mt-14 w-full max-w-5xl px-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="overflow-hidden rounded-2xl border border-white/30 bg-white/60 shadow-xl backdrop-blur-lg"
          >
            <div className="aspect-[16/9] w-full bg-gradient-to-tr from-neutral-100/70 via-white/60 to-neutral-50/70" />
            <div className="p-6 text-left">
              <p className="text-xs uppercase tracking-wider text-neutral-500">Featured</p>
              <h3 className="mt-1 text-xl font-medium text-neutral-900">Skyline Residences</h3>
              <p className="mt-2 text-neutral-700">Panoramic city views, resort-style amenities, and contemporary interiors.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
