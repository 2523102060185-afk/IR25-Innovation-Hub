import React from 'react';
import { Award, Wallet, ShoppingCart, GraduationCap, TrendingUp, Globe, Sparkles } from 'lucide-react';

export const MarketAndOECD: React.FC = () => {
  return (
    <section id="startup-status" className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200/70">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-blue-950 text-amber-400 flex items-center justify-center font-bold text-lg shadow-sm">
          3
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950">
            Sức Hút Đầu Tư & Vị Thế Startup Việt Nam
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Theo Báo cáo "Start-up Asia" của Tổ chức Hợp tác và Phát triển Kinh tế (OECD)
          </p>
        </div>
      </div>

      {/* OECD Rankings Hero Card */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white rounded-3xl p-6 sm:p-8 lg:p-10 mb-8 shadow-md border border-amber-500/30 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/40 px-3.5 py-1 rounded-full text-xs text-amber-300 font-semibold">
              <Globe className="w-3.5 h-3.5" />
              <span>Dữ liệu OECD (Giai đoạn 2020 – 2022)</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
              Điểm Sáng Thu Hút Dòng Vốn Mạo Hiểm Đông Nam Á
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Việt Nam duy trì tốc độ tăng trưởng kinh tế số ấn tượng cùng lực lượng kỹ sư công nghệ trẻ dồi dào. Khả năng thích ứng nhanh với các xu hướng công nghệ mới đã giúp hệ sinh thái khởi nghiệp Việt Nam vươn lên nhóm dẫn đầu khu vực ASEAN.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" /> Dân số trẻ & nhạy bén số hóa
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" /> Mạng lưới quỹ mạo hiểm quốc tế mở rộng
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 text-center flex flex-col justify-center">
              <span className="text-xs text-slate-300 font-medium block">Vốn Đầu Tư Mạo Hiểm</span>
              <div className="my-2 flex items-baseline justify-center gap-1">
                <span className="text-3xl sm:text-5xl font-black text-amber-400">Hạng 3</span>
              </div>
              <span className="text-[11px] text-amber-300 font-semibold bg-amber-400/10 py-1 px-2 rounded-lg">
                Khu Vực Đông Nam Á
              </span>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 text-center flex flex-col justify-center">
              <span className="text-xs text-slate-300 font-medium block">Số Lượng Startup</span>
              <div className="my-2 flex items-baseline justify-center gap-1">
                <span className="text-3xl sm:text-5xl font-black text-amber-400">Hạng 4</span>
              </div>
              <span className="text-[11px] text-amber-300 font-semibold bg-amber-400/10 py-1 px-2 rounded-lg">
                Khu Vực Đông Nam Á
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* 3 Core Highlight Sectors */}
      <div>
        <h3 className="text-base sm:text-lg font-bold text-blue-950 mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-amber-600" />
          <span>3 Lĩnh Vực Đổi Mới Sáng Tạo Nổi Bật Dẫn Dắt Dòng Vốn</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Fintech */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/90 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                  <Wallet className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-full">
                  Tiêu Điểm Vốn Lớn
                </span>
              </div>
              <h4 className="text-base font-bold text-blue-950 mb-2">
                Fintech (Công Nghệ Tài Chính)
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Bùng nổ các giải pháp thanh toán không dùng tiền mặt, ví điện tử, quản trị tài chính cá nhân và giải pháp tín dụng vi mô cho tiểu thương.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">Đại diện tiêu biểu:</span>
              <span className="font-bold text-indigo-950 bg-indigo-50 px-2.5 py-1 rounded-md">
                MoMo, VNPay
              </span>
            </div>
          </div>

          {/* E-Commerce */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/90 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  <ShoppingCart className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-amber-50 text-amber-700 rounded-full">
                  Tăng Trưởng Nhanh
                </span>
              </div>
              <h4 className="text-base font-bold text-blue-950 mb-2">
                Thương Mại Điện Tử & Bán Lẻ Số
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Tích hợp nền tảng bán buôn trực tuyến, mạng xã hội mua sắm (Social Commerce) kết nối liền mạch với hạ tầng kho vận logistics thông minh.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">Đại diện tiêu biểu:</span>
              <span className="font-bold text-amber-950 bg-amber-50 px-2.5 py-1 rounded-md">
                Tiki, Sendo
              </span>
            </div>
          </div>

          {/* EdTech */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/90 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full">
                  Tiềm Năng Dài Hạn
                </span>
              </div>
              <h4 className="text-base font-bold text-blue-950 mb-2">
                EdTech (Công Nghệ Giáo Dục)
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Ứng dụng trí tuệ nhân tạo (AI) cá nhân hóa bài giảng, kiểm tra phát âm đa ngôn ngữ, số hóa giáo trình đại học và trung tâm kỹ năng trực tuyến.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">Đại diện tiên phong:</span>
              <span className="font-bold text-emerald-950 bg-emerald-50 px-2.5 py-1 rounded-md">
                Topica, Elsa
              </span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
