import React from 'react';
import { Store, Lightbulb, Flag, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-200/70">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -top-20 right-1/4 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top University & Class Badge */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200/90 shadow-sm px-4 py-1.5 rounded-full text-xs font-semibold text-blue-950">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            <span>Trường Đại học Thủ Dầu Một (TDMU) · Lớp D25QHQT02</span>
            <span className="text-slate-300">|</span>
            <span className="text-amber-700">Học phần Đổi Mới Sáng Tạo Khởi Nghiệp</span>
          </div>

          {/* Official Logo Banner */}
          <div className="pt-2 flex justify-center">
            <div className="p-3 bg-white/90 backdrop-blur rounded-2xl shadow-sm border border-slate-200/80 inline-block">
              <img 
                src="/assets/aistudio/IR25_Innovation_Hub_Logo__4__69158aa4.png" 
                alt="IR25 Innovation Hub Official Logo" 
                className="h-20 sm:h-28 md:h-32 w-auto object-contain drop-shadow-sm"
              />
            </div>
          </div>

          {/* Main Title & Subtitle */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-blue-950 tracking-tight leading-tight">
              IR25 INNOVATION HUB
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl font-bold text-amber-700 max-w-3xl mx-auto">
              Sinh viên Quan hệ Quốc tế trong Hệ sinh thái Khởi nghiệp Đổi mới Sáng tạo Quốc gia
            </p>
          </div>

          {/* Tagline Box */}
          <div className="p-4 sm:p-5 bg-white rounded-2xl border-l-4 border-l-amber-500 border border-slate-200/90 shadow-sm max-w-xl mx-auto">
            <p className="italic text-slate-700 font-semibold text-sm sm:text-base">
              "Từ những ý tưởng nhỏ – Kiến tạo giá trị lớn"
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Chuyển hóa tri thức ngoại giao, tư duy toàn cầu thành giải pháp khởi nghiệp thực chiến
            </p>
          </div>

          {/* Summary Narrative */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Hành trình kết nối sinh viên ngành Quan hệ Quốc tế với chiến lược phát triển ĐMST của đất nước: từ cột mốc Nghị quyết 57-NQ/TW, Quyết định 844 đến các đề án thực tế tại lớp D25QHQT02 Trường Đại học Thủ Dầu Một.
          </p>

          {/* Call-to-actions */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#booth-showcase"
              className="bg-blue-950 hover:bg-blue-900 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all border border-amber-500/40 flex items-center gap-2 text-sm sm:text-base"
            >
              <Store className="w-5 h-5 text-amber-400" />
              <span>Khám Phá Gian Hàng IR25</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>

            <a
              href="#student-ideas"
              className="bg-white hover:bg-slate-50 text-blue-950 font-bold px-6 py-3 rounded-xl shadow-sm border border-slate-200 hover:border-amber-400 transition-all flex items-center gap-2 text-sm sm:text-base"
            >
              <Lightbulb className="w-5 h-5 text-amber-600" />
              <span>13 Dự Án Khởi Nghiệp</span>
            </a>

            <a
              href="#conclusion"
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-5 py-3 rounded-xl shadow-sm transition-all flex items-center gap-2 text-sm sm:text-base cursor-pointer"
            >
              <Flag className="w-4 h-4 text-blue-950" />
              <span>Tổng Kết Chiến Lược</span>
            </a>
          </div>

          {/* Core Stat Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full pt-8 text-left">
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-2xl sm:text-3xl font-black text-blue-950">4,000+</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Startup ĐMST tại Việt Nam (TECHFEST 12/2025)</div>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-2xl sm:text-3xl font-black text-amber-600">Top 3</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Vốn đầu tư mạo hiểm Đông Nam Á (Báo cáo OECD)</div>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-2xl sm:text-3xl font-black text-blue-950">42,000+</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Dự án sinh viên qua 7 năm triển khai Đề án 1665</div>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-2xl sm:text-3xl font-black text-emerald-600">13 Ý Tưởng</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Dự án & 5 phân khu sản phẩm của Lớp D25QHQT02</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
