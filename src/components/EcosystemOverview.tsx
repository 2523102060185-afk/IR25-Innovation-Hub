import React from 'react';
import { Rocket, TrendingUp, CheckCircle2, Milestone } from 'lucide-react';

export const EcosystemOverview: React.FC = () => {
  return (
    <section id="overview" className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200/70">
      
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-blue-950 text-amber-400 flex items-center justify-center font-bold text-lg shadow-sm">
          1
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950">
            Khởi Nghiệp Trong Kỷ Nguyên Hội Nhập Toàn Cầu
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Bước chuyển dịch lịch sử từ mô hình kinh doanh truyền thống sang Đổi mới Sáng tạo (ĐMST)
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Main Narrative Card */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/90 flex flex-col justify-between space-y-6">
          <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
            <p>
              Giai đoạn <strong>2000–2015</strong> với khẩu hiệu <span className="text-blue-950 font-semibold">“Lập thân, Lập nghiệp”</span> đã tập trung vào việc khuyến khích người dân mở cửa hàng, cơ sở kinh doanh vừa và nhỏ (SME). Đến năm <strong>2016 – "Năm Quốc gia Khởi nghiệp"</strong>, Việt Nam chính thức ghi nhận bước chuyển mình ngoạn mục: chuyển dịch mạnh mẽ từ buôn bán nhỏ lẻ sang <span className="text-amber-800 font-bold">Khởi nghiệp Đổi mới Sáng tạo (ĐMST)</span> dựa trên công nghệ, sở hữu trí tuệ và mô hình kinh doanh tăng trưởng cao.
            </p>
            <p>
              Học hỏi kinh nghiệm thành công từ các quốc gia khởi nghiệp hàng đầu thế giới như <strong>Israel</strong> (Quốc gia Khởi nghiệp) và <strong>Singapore</strong> (Trung tâm Đổi mới Tài chính & Công nghệ), Việt Nam kết hợp tinh thần dám nghĩ dám làm của thế hệ trẻ với hệ sinh thái liên kết chặt chẽ dưới sự dẫn dắt chiến lược của Nhà nước.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 bg-slate-50 p-4 rounded-xl border-l-4 border-l-blue-950">
              Khởi nghiệp trong thời đại mới không còn là hoạt động đơn lẻ của từng cá nhân mà là bài toán phát triển toàn diện hệ sinh thái: <strong>Thể chế minh bạch – Vốn mạo hiểm – Tri thức hàn lâm – Con người toàn cầu – Phát triển bền vững (ESG)</strong>.
            </p>
          </div>

          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
            <div className="flex items-start gap-2 bg-blue-50/50 p-3 rounded-xl border border-blue-100">
              <Milestone className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
              <div>
                <strong className="text-blue-950 block">Mô hình Israel:</strong>
                <span>Tập trung R&D, công nghệ lõi và giải pháp vươn ra thị trường toàn cầu ngay từ ngày đầu.</span>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-amber-50/50 p-3 rounded-xl border border-amber-100">
              <Milestone className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-950 block">Mô hình Singapore:</strong>
                <span>Cầu nối dòng vốn quốc tế, vườn ươm chuẩn mực và bảo vệ sở hữu trí tuệ khắt khe.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Milestone TECHFEST Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950 text-white rounded-2xl p-6 sm:p-8 shadow-lg border border-amber-500/30 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -right-8 -bottom-8 opacity-10">
            <Rocket className="w-56 h-56 text-white" />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/40 px-3 py-1 rounded-full text-xs text-amber-300 font-semibold mb-5">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Cột Mốc TECHFEST 12/2025</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Bức Tranh Hệ Sinh Thái ĐMST Việt Nam
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
              Minh chứng sinh động cho hành trình 10 năm chuyển mình vươn lên thành một trong những cái nôi công nghệ sôi động nhất Đông Nam Á.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 text-center">
                <div className="text-3xl sm:text-4xl font-black text-amber-400">4,000+</div>
                <div className="text-xs text-slate-300 mt-1 font-medium">Startup đang hoạt động</div>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 text-center">
                <div className="text-3xl sm:text-4xl font-black text-amber-400">02</div>
                <div className="text-xs text-slate-300 mt-1 font-medium">Doanh nghiệp Kỳ Lân (Unicorn)</div>
              </div>
            </div>
          </div>

          <div className="space-y-2.5 text-xs text-slate-200 border-t border-white/10 pt-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Chuyển dịch trọng tâm từ số lượng sang phát triển chiều sâu</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Thúc đẩy thương mại hóa kết quả nghiên cứu & sáng chế</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Liên kết chặt chẽ Nhà nước - Viện trường - Doanh nghiệp</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
