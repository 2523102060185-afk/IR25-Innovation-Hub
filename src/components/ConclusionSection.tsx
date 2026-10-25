import React from 'react';
import { Flag, Sparkles, GraduationCap, Lightbulb } from 'lucide-react';

export const ConclusionSection: React.FC = () => {
  return (
    <section id="conclusion" className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden border border-amber-500/30">
        
        {/* Glow background accents */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/40 px-4 py-1.5 rounded-full text-xs font-semibold text-amber-300">
            <Flag className="w-3.5 h-3.5" />
            <span>Tổng Kết Chiến Lược & Định Hướng Tương Lai</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Cầu Nối Chiến Lược Vươn Tầm Hệ Sinh Thái Khởi Nghiệp Toàn Cầu
          </h2>

          <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Hành trình từ chính sách vĩ mô của Đề án 844, Nghị quyết 57-NQ/TW đến thực tiễn tại gian hàng <strong>IR25 Innovation Hub</strong> khẳng định: sinh viên Quan hệ Quốc tế Lớp <strong>D25QHQT02 Trường Đại học Thủ Dầu Một (TDMU)</strong> sở hữu đầy đủ thế mạnh về tư duy toàn cầu, khả năng kết nối mạng lưới và giao tiếp đa văn hóa. Chuyển hóa tri thức ngoại giao thành giải pháp thực chiến là tiền đề vững chắc đưa giá trị sáng tạo người trẻ Việt vươn tầm quốc tế.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a
              href="#booth-showcase"
              className="bg-amber-500 hover:bg-amber-600 text-blue-950 font-black px-8 py-3.5 rounded-2xl shadow-lg transition-all flex items-center gap-2 text-sm sm:text-base"
            >
              <Sparkles className="w-4 h-4 text-blue-950" />
              <span>Khám Phá Gian Hàng IR25</span>
            </a>

            <a
              href="#student-ideas"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-2xl border border-white/20 transition-all flex items-center gap-2 text-sm sm:text-base"
            >
              <Lightbulb className="w-4 h-4 text-amber-300" />
              <span>13 Dự Án Khởi Nghiệp Lớp D25QHQT02</span>
            </a>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-amber-400" /> Ngành Quan hệ Quốc tế · TDMU
            </span>
            <span className="text-slate-600">·</span>
            <span>Học phần Đổi mới sáng tạo khởi nghiệp (0+3)</span>
            <span className="text-slate-600">·</span>
            <span>Niên khóa 2025 – 2029</span>
          </div>

        </div>

      </div>
    </section>
  );
};
