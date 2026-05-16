'use client';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronRight, ArrowDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const heroImages = [
  {
    src: '/images/hero-pilates.png',
    alt: 'Pilates Recovery',
    label: 'Pilates',
  },
  {
    src: '/images/hero-golf.png',
    alt: 'Golf Performance',
    label: 'Golf',
  },
  {
    src: '/images/hero-training.png',
    alt: 'Strength Training',
    label: 'Training',
  },
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { margin: "0px" });

  useEffect(() => {
    if (!isInView) return;

    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <section ref={ref} className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-32 bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-slate-50/50 rounded-bl-[10rem]" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="transform-gpu"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-bold tracking-widest text-sky-600 uppercase bg-sky-50 rounded-full">
              <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
              Recovery from Back Pain
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
              腰痛を恐れず、<br />
              また動ける身体を<br />
              自ら探究する。
            </h2>

            <div className="space-y-6 text-lg text-slate-500 leading-relaxed mb-12 max-w-xl text-balance">
              <p>
                僕は3度、動けなくなるレベルの腰痛を経験しました。
              </p>
              <p>
                完全に痛みをゼロにすることだけではなく、腰痛を正しく理解し、自分で調整し、また自由に動ける身体を目指すプロセスを共有します。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/knowledge" className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition-colors duration-200 shadow-xl shadow-slate-200 flex items-center justify-center gap-2 group">
                腰痛を学ぶ
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/recovery" className="px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg hover:border-slate-400 transition-colors duration-200 flex items-center justify-center gap-2">
                復帰の歩み
              </Link>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-16 flex items-center gap-3 text-slate-400 text-sm font-medium"
            >
              <div className="w-8 h-px bg-slate-200" />
              SCROLL DOWN
              <ArrowDown size={14} className="animate-bounce" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative transform-gpu"
          >
            <div className="relative aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden shadow-2xl shadow-sky-900/10 border-8 border-white bg-slate-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={heroImages[currentImage].src}
                    alt={heroImages[currentImage].alt}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
                  
                  {/* Category Label */}
                  <div className="absolute bottom-8 right-8">
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-[10px] font-bold tracking-widest uppercase">
                      {heroImages[currentImage].label}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Carousel Indicators */}
            <div className="absolute -bottom-4 right-12 flex gap-2">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`w-12 h-1.5 rounded-full transition-all ${
                    i === currentImage ? 'bg-sky-500 w-20' : 'bg-slate-200 hover:bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
