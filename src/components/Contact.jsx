import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.4, margin: '0px 0px -20% 0px' });
  const controls = useAnimation();

  useEffect(() => {
    controls.start(inView ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 20 });
  }, [inView, controls]);

  return (
    <section id="contact" ref={ref} className="bg-white py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        className="mx-auto max-w-7xl px-6"
      >
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">Contact</h2>
          <p className="mt-2 text-neutral-600">Share your details and we’ll get back with tailored options.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <form className="space-y-4 rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur">
            <div>
              <label className="block text-sm font-medium text-neutral-700">Name</label>
              <input type="text" className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-4 py-2 outline-none ring-0 focus:border-neutral-400" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700">Email</label>
              <input type="email" className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-4 py-2 outline-none ring-0 focus:border-neutral-400" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700">Message</label>
              <textarea rows="4" className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-4 py-2 outline-none ring-0 focus:border-neutral-400" placeholder="Tell us what you’re looking for" />
            </div>
            <button type="button" className="w-full rounded-full bg-neutral-900 px-5 py-2 text-white hover:bg-neutral-800">Send</button>
          </form>

          <div className="rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur">
            <h4 className="text-lg font-semibold text-neutral-900">Visit Our Studio</h4>
            <p className="mt-2 text-neutral-600">Mon–Sat, 10:00–18:00</p>
            <div className="mt-4 space-y-2 text-neutral-700">
              <p>123 Light Avenue, Suite 6</p>
              <p>Cityscape, 10010</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
