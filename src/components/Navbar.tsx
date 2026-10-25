import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Store } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Tổng Quan', href: '#overview' },
    { label: 'Chính Sách', href: '#policies' },
    { label: 'Vị Thế Startup', href: '#startup-status' },
    { label: 'Lợi Thế QHQT', href: '#ir-advantages' },
    { label: '13 Ý Tưởng', href: '#student-ideas' },
    { label: 'Gian Hàng IR25', href: '#booth-showcase' },
    { label: 'Tổng Kết Chiến Lược', href: '#conclusion' },
  ];

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2.5' 
        : 'bg-white border-b border-slate-100 py-3.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a href="#hero" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 rounded-lg p-1">
            <img 
              src="/assets/aistudio/IR25_Innovation_Hub_Logo__4__69158aa4.png" 
              alt="IR25 Innovation Hub Logo" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Đại học Thủ Dầu Một
              </span>
              <span className="text-xs font-bold text-blue-950">
                Lớp D25QHQT02 · QHQT
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-blue-950 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-amber-500 after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#booth-showcase"
              className="inline-flex items-center gap-2 bg-blue-950 hover:bg-blue-900 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold shadow-sm hover:shadow transition-all border border-amber-500/40 cursor-pointer"
            >
              <Store className="w-4 h-4 text-amber-400" />
              <span>Khám Phá Gian Hàng</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-blue-950 hover:bg-slate-100 focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top duration-200">
          <div className="p-2 mb-2 bg-blue-50/60 rounded-xl text-xs text-blue-950 font-medium flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
            <span>Khoa Quan hệ Quốc tế - Trường Đại học Thủ Dầu Một</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-950"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100">
            <a
              href="#booth-showcase"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-blue-950 text-white py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Store className="w-4 h-4 text-amber-400" />
              <span>Xem Sản Phẩm Gian Hàng</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
