import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Home, Paintbrush, Landmark, Wallet } from 'lucide-react';

const services = [
  { icon: Home, title: 'Real Estate', desc: 'Residences that blend architecture, light, and community.' },
  { icon: Paintbrush, title: 'Interior Design', desc: 'Textural palettes, bespoke furniture, and curated art.' },
  { icon: Landmark, title: 'Projects', desc: 'From concept to handover with cinematic storytelling.' },
  { icon: Wallet, title: 'Home Loans', desc: 'Guidance across lenders with transparent comparisons.' },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });

  return (
    <section id="services" ref={ref} className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">What We Do</h2>
          <p className="mt-2 text-neutral-600">A full-stack studio for homes, interiors, and financing.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.4, y: 20 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur"
            >
              <div className="mb-4 inline-flex rounded-xl bg-neutral-100 p-3 text-neutral-700">
                <s.icon className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-semibold text-neutral-900">{s.title}</h4>
              <p className="mt-2 text-neutral-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
