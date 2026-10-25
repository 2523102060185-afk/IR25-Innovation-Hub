import React from 'react';
import { Globe2, MessageSquare, Network, ShieldCheck, Sparkles } from 'lucide-react';

export const IRStudentAdvantages: React.FC = () => {
  return (
    <section id="ir-advantages" className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200/70">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-blue-950 text-amber-400 flex items-center justify-center font-bold text-lg shadow-sm">
          5
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950">
            Lợi Thế Cốt Lõi Của Sinh Viên Quan Hệ Quốc Tế (QHQT)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Hội tụ tri thức liên ngành: Chính trị học, Kinh tế đối ngoại, Luật pháp quốc tế & Văn hóa ngoại giao
          </p>
        </div>
      </div>

      {/* 3 Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Pillar 1 */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/90 hover:shadow-md hover:border-amber-400 transition-all flex flex-col justify-between">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-950 flex items-center justify-center mb-5 border border-blue-100">
              <Globe2 className="w-7 h-7 text-blue-900" />
            </div>

            <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">
              Trụ Cột 01
            </div>
            <h3 className="text-lg font-bold text-blue-950 mb-3">
              Tư Duy Hệ Thống & Tầm Nhìn Toàn Cầu
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
              Khả năng phân tích bài toán kinh doanh không dừng lại ở ranh giới một địa phương mà đặt trong mối tương quan đa chiều: <strong>Quốc gia – Khu vực – Toàn cầu</strong>.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1.5">
            <div className="flex items-center gap-2 text-slate-700 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Nắm bắt dịch chuyển chuỗi cung ứng quốc tế</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Quản trị rủi ro địa chính trị & rào cản mậu dịch</span>
            </div>
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/90 hover:shadow-md hover:border-amber-400 transition-all flex flex-col justify-between">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center mb-5 border border-amber-100">
              <MessageSquare className="w-7 h-7 text-amber-700" />
            </div>

            <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">
              Trụ Cột 02
            </div>
            <h3 className="text-lg font-bold text-blue-950 mb-3">
              Giao Tiếp Đa Văn Hóa & Ngoại Giao Công Chúng
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Kỹ năng sử dụng ngoại ngữ lưu loát kết hợp cùng sự thấu cảm sâu sắc về tâm lý, phong tục tập quán, lễ nghi bang giao và văn hóa kinh doanh của các đối tác toàn cầu.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1.5">
            <div className="flex items-center gap-2 text-slate-700 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Kể câu chuyện thương hiệu Việt chạm cảm xúc</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Đàm phán thương vụ theo chuẩn mực ngoại giao</span>
            </div>
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/90 hover:shadow-md hover:border-amber-400 transition-all flex flex-col justify-between">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-5 border border-emerald-100">
              <Network className="w-7 h-7 text-emerald-700" />
            </div>

            <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">
              Trụ Cột 03
            </div>
            <h3 className="text-lg font-bold text-blue-950 mb-3">
              Năng Lực Kết Nối Mạng Lưới Chiến Lược
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Khả năng tiếp cận và liên kết nhanh chóng với cơ quan đại diện ngoại giao, hiệp hội doanh nghiệp đa quốc gia (AmCham, EuroCham, KorCham) và các tổ chức phi chính phủ.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1.5">
            <div className="flex items-center gap-2 text-slate-700 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Mở rộng thị trường xuất khẩu bền vững</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Huy động nguồn tài trợ từ các quỹ đa phương</span>
            </div>
          </div>
        </div>

      </div>

      {/* TDMU Classroom Integration Banner */}
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-950 to-slate-900 text-white rounded-2xl shadow-sm border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Phương Châm Hành Động Lớp D25QHQT02 · TDMU</span>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white">
            "Ngoại Giao Không Chỉ Trên Bàn Đàm Phán – Ngoại Giao Là Kiến Tạo Giá Trị Doanh Thương"
          </h4>
        </div>
        <a 
          href="#student-ideas" 
          className="shrink-0 bg-white text-blue-950 hover:bg-amber-400 font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all"
        >
          Xem 13 Ý Tưởng Thực Chiến
        </a>
      </div>

    </section>
  );
};
