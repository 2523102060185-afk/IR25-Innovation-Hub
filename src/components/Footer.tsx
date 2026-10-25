import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Logo & Title */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <img 
              src="/assets/aistudio/IR25_Innovation_Hub_Logo__4__69158aa4.png" 
              alt="IR25 Innovation Hub Logo" 
              className="h-12 w-auto object-contain bg-white/5 p-1 rounded-xl"
            />
            <div>
              <div className="text-white font-extrabold text-base tracking-wide flex items-center gap-1.5">
                <span className="text-amber-400">IR25</span> INNOVATION HUB
              </div>
              <p className="text-slate-400 text-xs mt-0.5">
                Khoa Quan hệ Quốc tế · Trường Đại học Thủ Dầu Một (TDMU)
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400">
            <a href="#overview" className="hover:text-amber-400 transition-colors">Tổng Quan</a>
            <a href="#policies" className="hover:text-amber-400 transition-colors">Chính Sách</a>
            <a href="#startup-status" className="hover:text-amber-400 transition-colors">Vị Thế</a>
            <a href="#ir-advantages" className="hover:text-amber-400 transition-colors">Sinh Viên QHQT</a>
            <a href="#student-ideas" className="hover:text-amber-400 transition-colors">13 Ý Tưởng</a>
            <a href="#booth-showcase" className="hover:text-amber-400 transition-colors">Gian Hàng</a>
            <a href="#conclusion" className="hover:text-amber-400 transition-colors">Tổng Kết Chiến Lược</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Về đầu trang"
            title="Lên đầu trang"
          >
            <ArrowUp className="w-5 h-5" />
          </button>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 text-center sm:text-left">
          <p>
            © 2026 IR25 Innovation Hub. Sản phẩm đề án thuộc về Tập thể Sinh viên Lớp D25QHQT02, Trường Đại học Thủ Dầu Một.
          </p>
          <p className="text-slate-400">
            Học phần: <em>Đổi mới sáng tạo khởi nghiệp (0+3)</em>
          </p>
        </div>

      </div>
    </footer>
  );
};
