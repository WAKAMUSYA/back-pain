'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Microscope, Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/knowledge', label: '知識図鑑' },
  { href: '/movements', label: 'リハビリ図鑑' },
  { href: '/athlete', label: 'アスリート復帰' },
  { href: '/notes', label: '研究ノート' },
  { href: '/glossary', label: '用語辞典' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group relative z-[110]">
          <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 group-hover:bg-sky-100 transition-colors">
            <Microscope size={24} />
          </div>
          <div>
            <h1 className="font-bold text-lg md:text-xl tracking-tight text-slate-800 leading-tight">
              腰痛からの復帰
            </h1>
            <p className="text-[9px] md:text-[10px] text-slate-400 font-medium tracking-widest uppercase">
              Recovery from Back Pain
            </p>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`hover:text-sky-600 transition-colors ${pathname === link.href ? 'text-sky-600' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/#self-check" className="px-5 py-2.5 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-sm">
            セルフチェック
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative z-[110] p-2 text-slate-600 hover:text-sky-600 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-white lg:hidden z-[100] flex flex-col"
            >
              <div className="flex-grow flex flex-col justify-center px-8">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center justify-between py-6 border-b border-slate-50 text-2xl font-bold transition-all ${
                        pathname === link.href ? 'text-sky-600' : 'text-slate-900'
                      }`}
                    >
                      {link.label}
                      <ChevronRight size={24} className={pathname === link.href ? 'text-sky-400' : 'text-slate-300'} />
                    </Link>
                  ))}
                  <div className="mt-12">
                    <Link 
                      href="/#self-check" 
                      className="flex items-center justify-center w-full py-5 rounded-2xl bg-slate-900 text-white font-bold text-xl shadow-xl shadow-slate-200"
                    >
                      セルフチェック
                    </Link>
                  </div>
                </nav>
              </div>

              <div className="p-10 text-center bg-slate-50 border-t border-slate-100">
                <p className="text-sm font-bold text-slate-800 mb-1">腰痛からの復帰を目指す</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest">Recovery from Back Pain</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
