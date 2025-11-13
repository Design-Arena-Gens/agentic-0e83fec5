'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=2070&q=80';

export default function HomePage() {
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const offset = window.scrollY * 0.25;
      setParallaxOffset(Math.min(offset, 200));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10 select-none transition-transform duration-300 ease-out will-change-transform"
          style={{ transform: `translateY(${parallaxOffset * -0.5}px)` }}
        >
          <Image
            src={HERO_IMAGE}
            alt="Silhouette of a majestic cat perched on a rolling green hill during a vibrant sunset"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-transparent" aria-hidden />
          <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-t from-emerald-500/50 via-emerald-400/20 to-transparent blur-3xl" aria-hidden />
        </div>

        <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-6 text-center sm:px-12">
          <p className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-emerald-200/80 backdrop-blur">
            Wildlife Lens Collective
          </p>
          <h1 className="text-balance text-5xl font-bold tracking-tight text-white drop-shadow sm:text-6xl lg:text-7xl">
            Explore the Wild
          </h1>
          <p className="text-balance text-base font-light text-slate-100/80 sm:text-lg lg:text-xl">
            We capture the untamed beauty of wildlife, sharing immersive stories that inspire conservation and celebrate the delicate harmony of nature.
          </p>
          <button className="rounded-full bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950 shadow-lg shadow-amber-200/30 transition hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" type="button">
            View Gallery
          </button>
        </div>
      </section>

      <section className="mx-auto grid max-w-4xl gap-8 px-6 py-16 text-left sm:grid-cols-2 sm:px-12">
        <article className="space-y-3">
          <h2 className="text-xl font-semibold text-white">Immersive Expeditions</h2>
          <p className="text-sm leading-relaxed text-slate-300">
            Follow our photographers as they trek across remote landscapes and patiently wait for the perfect moment when light, wildlife, and environment align.
          </p>
        </article>
        <article className="space-y-3">
          <h2 className="text-xl font-semibold text-white">Conservation in Focus</h2>
          <p className="text-sm leading-relaxed text-slate-300">
            Every image supports conservation initiatives that protect habitats, ensuring that the wild places we love remain vibrant for generations to come.
          </p>
        </article>
      </section>
    </main>
  );
}
