import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.35 });
  const controls = useAnimation();
  const [zoomLevel, setZoomLevel] = useState(0); // 0: overview, 1: team names, 2: member detail
  const [active, setActive] = useState(null);

  useEffect(() => {
    controls.start(inView ? 'visible' : 'hidden');
  }, [inView, controls]);

  const team = useMemo(
    () => [
      { id: 'aria', name: 'Aria Patel', role: 'Creative Director', bio: 'Leads visual language and cinematic direction across all projects.', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop' },
      { id: 'leo', name: 'Leo Carter', role: 'Lead Architect', bio: 'Specializes in light-first layouts and sustainable materials.', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop' },
      { id: 'mina', name: 'Mina Suzuki', role: 'Interior Designer', bio: 'Curates textures, color, and bespoke furnishings with subtle motion cues.', img: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=800&auto=format&fit=crop' },
    ],
    []
  );

  return (
    <section id="about" ref={ref} className="bg-white py-20">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={controls}
        className="mx-auto max-w-7xl px-6"
      >
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">About Us</h2>
          <p className="mt-2 text-neutral-600">A studio blending architecture, interiors, and finance guidance to craft livable art.</p>
        </div>

        {/* Zoom stages */}
        <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur">
          {/* Stage 0: Overview */}
          {zoomLevel === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="text-xl font-medium text-neutral-900">Cinematic + Light</h3>
                  <p className="mt-2 text-neutral-600">
                    We shape spaces with gentle motion, parallax depth, and a calm light theme. Scroll and experience content that
                    fades in as you arrive and recedes as you move on.
                  </p>
                  <div className="mt-6">
                    <button
                      onClick={() => setZoomLevel(1)}
                      className="rounded-full bg-neutral-900 px-5 py-2 text-white hover:bg-neutral-800"
                    >
                      Zoom into Team
                    </button>
                  </div>
                </div>
                <motion.div
                  initial={{ scale: 0.96, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="aspect-[16/10] w-full rounded-xl bg-gradient-to-tr from-neutral-100 via-white to-neutral-50"
                />
              </div>
            </motion.div>
          )}

          {/* Stage 1: Team names (zoomed) */}
          {zoomLevel === 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="grid gap-6 sm:grid-cols-12"
            >
              <div className="sm:col-span-4">
                <h4 className="text-lg font-semibold text-neutral-900">Our Team</h4>
                <p className="mt-1 text-neutral-600">Tap a name to zoom into details.</p>
                <div className="mt-4 space-y-2">
                  {team.map((m) => (
                    <motion.button
                      key={m.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setActive(m);
                        setZoomLevel(2);
                      }}
                      className="flex w-full items-center justify-between rounded-xl border border-neutral-200 bg-white px-4 py-3 text-left hover:bg-neutral-50"
                    >
                      <span className="font-medium text-neutral-900">{m.name}</span>
                      <span className="text-sm text-neutral-500">{m.role}</span>
                    </motion.button>
                  ))}
                </div>
                <button
                  onClick={() => setZoomLevel(0)}
                  className="mt-6 text-sm text-neutral-600 underline underline-offset-4 hover:text-neutral-900"
                >
                  Zoom out to Overview
                </button>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                className="sm:col-span-8"
              >
                <div className="aspect-[16/10] w-full rounded-xl bg-gradient-to-br from-neutral-100 via-white to-neutral-50" />
              </motion.div>
            </motion.div>
          )}

          {/* Stage 2: Member details side-by-side */}
          {zoomLevel === 2 && active && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="grid gap-6 sm:grid-cols-12"
            >
              <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="sm:col-span-5">
                <img
                  src={active.img}
                  alt={active.name}
                  className="h-full w-full rounded-xl object-cover"
                />
              </motion.div>
              <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="sm:col-span-7">
                <h4 className="text-2xl font-semibold text-neutral-900">{active.name}</h4>
                <p className="text-neutral-600">{active.role}</p>
                <p className="mt-4 text-neutral-700">{active.bio}</p>
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => setZoomLevel(1)}
                    className="rounded-full border border-neutral-300 px-4 py-2 text-neutral-800 hover:bg-neutral-50"
                  >
                    Back to Names
                  </button>
                  <button
                    onClick={() => setZoomLevel(0)}
                    className="rounded-full bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800"
                  >
                    Zoom Out
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
