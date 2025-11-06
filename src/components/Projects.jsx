import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const cardVariants = {
  hiddenLeft: { opacity: 0, x: -60 },
  hiddenRight: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

function ProjectCard({ direction = 'left', title, subtitle }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.4, once: false });
  const controls = useAnimation();

  useEffect(() => {
    controls.start(inView ? 'show' : direction === 'left' ? 'hiddenLeft' : 'hiddenRight');
  }, [inView, controls, direction]);

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial={direction === 'left' ? 'hiddenLeft' : 'hiddenRight'}
      animate={controls}
      className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur transition-all hover:shadow-lg"
    >
      <h4 className="text-lg font-semibold text-neutral-900">{title}</h4>
      <p className="mt-1 text-neutral-600">{subtitle}</p>
      <div className="mt-4 h-40 w-full rounded-xl bg-gradient-to-br from-neutral-100 via-white to-neutral-50" />
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">Signature Projects</h2>
            <p className="mt-2 max-w-2xl text-neutral-600">Curated spaces that blend architecture, light, and thoughtful interiors.</p>
          </div>
          <a href="#contact" className="hidden rounded-full border border-neutral-300 px-5 py-2 text-sm text-neutral-800 hover:bg-neutral-50 sm:block">Request Brochure</a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard direction="left" title="Oceanview Towers" subtitle="Seaside living with cascading terraces." />
          <ProjectCard direction="right" title="Garden Court" subtitle="Lush courtyards and airy balcons." />
          <ProjectCard direction="left" title="Atrium Lofts" subtitle="Double-height spaces with natural light." />
          <ProjectCard direction="right" title="Cedar Villas" subtitle="Warm materials and tranquil streetscapes." />
          <ProjectCard direction="left" title="Skyline Residences" subtitle="Elevated city panoramas and amenities." />
          <ProjectCard direction="right" title="Riverside Enclave" subtitle="Calm waterfront promenade and cafés." />
        </div>
      </div>
    </section>
  );
}
