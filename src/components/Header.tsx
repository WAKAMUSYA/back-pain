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

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group relative z-[60]">
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
          className="lg:hidden relative z-[60] p-2 text-slate-600 hover:text-sky-600 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm lg:hidden z-40"
              />
              
              {/* Menu Content */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl lg:hidden z-50 pt-28 pb-10 px-8 overflow-y-auto"
              >
                <div className="flex flex-col gap-2">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">探索する</p>
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`group flex items-center justify-between py-5 border-b border-slate-50 text-xl font-bold transition-all ${
                        pathname === link.href ? 'text-sky-600' : 'text-slate-800 hover:text-sky-600'
                      }`}
                    >
                      {link.label}
                      <ChevronRight size={20} className="text-slate-300 group-hover:text-sky-400 transition-colors" />
                    </Link>
                  ))}
                  <div className="mt-8">
                    <Link 
                      href="/#self-check" 
                      className="flex items-center justify-center w-full py-5 rounded-2xl bg-slate-900 text-white font-bold text-lg hover:bg-slate-800 transition-all shadow-lg"
                    >
                      セルフチェックを始める
                    </Link>
                  </div>
                </div>

                <div className="mt-auto pt-12 text-center">
                  <p className="text-xs text-slate-400">© 2024 腰痛からの復帰を目指す</p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
